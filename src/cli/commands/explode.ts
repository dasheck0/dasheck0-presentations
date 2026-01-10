import { existsSync, mkdirSync, readdirSync, statSync, readFileSync } from 'fs';
import { join, resolve, basename, extname, dirname } from 'path';
import { execSync } from 'child_process';
import chalk from 'chalk';
import inquirer from 'inquirer';
import { PDFDocument } from 'pdf-lib';

interface ExplodeOptions {
  file?: string;
}

interface FileChoice {
  name: string;
  value: string;
  type: 'file' | 'directory' | 'parent';
}

/**
 * Recursively browse directories to select a PDF file
 */
const browsePdfFile = async (currentPath: string = process.cwd()): Promise<string> => {
  const entries = readdirSync(currentPath);
  
  // Filter and categorize entries
  const choices: FileChoice[] = [];
  
  // Add parent directory option if not at root
  if (currentPath !== process.cwd()) {
    choices.push({
      name: chalk.gray('📁 ../ (Parent Directory)'),
      value: dirname(currentPath),
      type: 'parent',
    });
  }
  
  // Add directories
  const directories = entries
    .filter((entry) => {
      const fullPath = join(currentPath, entry);
      return statSync(fullPath).isDirectory() && !entry.startsWith('.');
    })
    .sort()
    .map((entry) => ({
      name: chalk.cyan(`📁 ${entry}/`),
      value: join(currentPath, entry),
      type: 'directory' as const,
    }));
  
  // Add PDF files
  const pdfFiles = entries
    .filter((entry) => {
      const fullPath = join(currentPath, entry);
      return statSync(fullPath).isFile() && extname(entry).toLowerCase() === '.pdf';
    })
    .sort()
    .map((entry) => ({
      name: chalk.green(`📄 ${entry}`),
      value: join(currentPath, entry),
      type: 'file' as const,
    }));
  
  choices.push(...directories, ...pdfFiles);
  
  if (choices.length === 0) {
    console.log(chalk.yellow('No PDF files or subdirectories found in this location.'));
    return browsePdfFile(dirname(currentPath));
  }
  
  const { selected } = await inquirer.prompt([
    {
      type: 'list',
      name: 'selected',
      message: chalk.bold(`Current: ${currentPath.replace(process.cwd(), '.')}\nSelect a PDF file or directory:`),
      choices,
      pageSize: 15,
    },
  ]);
  
  // Check if selection is a file or directory
  const selectedStat = statSync(selected);
  
  if (selectedStat.isDirectory()) {
    // Recurse into directory
    return browsePdfFile(selected);
  } else {
    // Return selected PDF file
    return selected;
  }
};

/**
 * Get page count from PDF using pdf-lib
 */
const getPdfPageCount = async (pdfPath: string): Promise<number> => {
  try {
    const pdfBytes = readFileSync(pdfPath);
    const pdfDoc = await PDFDocument.load(pdfBytes, {
      ignoreEncryption: true,
      throwOnInvalidObject: false,
    });
    return pdfDoc.getPageCount();
  } catch (error) {
    throw new Error(`Failed to read PDF: ${(error as Error).message}`);
  }
};

/**
 * Convert PDF pages to PNG files using pdftocairo
 */
const explodePdf = async (pdfPath: string): Promise<void> => {
  // Validate PDF file exists
  if (!existsSync(pdfPath)) {
    console.error(chalk.red(`Error: PDF file not found: ${pdfPath}`));
    process.exit(1);
  }
  
  // Validate it's a PDF file
  if (extname(pdfPath).toLowerCase() !== '.pdf') {
    console.error(chalk.red(`Error: File is not a PDF: ${pdfPath}`));
    process.exit(1);
  }
  
  const pdfName = basename(pdfPath, '.pdf');
  const outputDir = resolve(process.cwd(), 'temp', pdfName);
  
  // Create output directory
  mkdirSync(outputDir, { recursive: true });
  
  console.log(chalk.cyan(`\n📄 Processing: ${pdfName}.pdf`));
  console.log(chalk.gray(`   Output: ${outputDir.replace(process.cwd(), '.')}\n`));
  
  try {
    // Get page count first
    console.log(chalk.gray('   Reading PDF metadata...'));
    const pageCount = await getPdfPageCount(pdfPath);
    const digits = String(pageCount).length;
    
    console.log(chalk.gray(`   Found ${pageCount} pages\n`));
    
    // Convert each page using pdftocairo
    console.log(chalk.cyan('   Converting pages to PNG...'));
    
    for (let i = 1; i <= pageCount; i++) {
      const pageNumber = String(i).padStart(digits, '0');
      const outputPath = join(outputDir, pageNumber);
      
      // Use pdftocairo to convert single page
      // -png: PNG output format
      // -f/-l: first/last page (same for single page)
      // -singlefile: don't add page number suffix
      // -r 150: 150 DPI resolution
      execSync(
        `pdftocairo -png -f ${i} -l ${i} -singlefile -r 150 "${pdfPath}" "${outputPath}"`,
        { stdio: 'pipe' }
      );
      
      // Show progress
      if (i % 5 === 0 || i === pageCount) {
        process.stdout.write(chalk.gray(`   Progress: ${i}/${pageCount} pages\r`));
      }
    }
    
    console.log(chalk.green(`\n\n✓ Converted ${pageCount} pages\n`));
    
    // List generated files
    const files = readdirSync(outputDir).sort();
    files.forEach((file) => {
      console.log(chalk.gray(`   ${file}`));
    });
    
    console.log(chalk.bold.green(`\n✓ Successfully exploded PDF into ${pageCount} PNG files`));
    console.log(chalk.gray(`   Location: ${outputDir.replace(process.cwd(), '.')}`));
  } catch (error) {
    console.error(chalk.red(`\n✗ Error converting PDF:`));
    console.error(chalk.red((error as Error).message));
    process.exit(1);
  }
};

/**
 * Main explode command handler
 */
export const explodePdfCommand = async (options: ExplodeOptions): Promise<void> => {
  let pdfPath: string;
  
  if (options.file) {
    // Direct mode: Use provided file path
    pdfPath = resolve(process.cwd(), options.file);
  } else {
    // Interactive mode: Browse and select PDF file
    console.log(chalk.bold.cyan('\n📂 PDF Exploder - Select a PDF file\n'));
    pdfPath = await browsePdfFile();
  }
  
  await explodePdf(pdfPath);
};
