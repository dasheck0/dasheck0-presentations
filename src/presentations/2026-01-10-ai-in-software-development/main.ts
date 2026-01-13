// Import reveal.js CSS
import 'reveal.js/dist/reset.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/plugin/highlight/monokai.css';

// Import theme CSS
import '../../themes/nanoverse/theme.scss';

import './custom.scss';

import { nanoverseTheme } from '@themes/nanoverse/config';
import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';

const deck = new Reveal({
  ...nanoverseTheme.reveal,
  width: 1280,
  height: 720,
  plugins: [Markdown, Highlight, Notes],
});

deck.initialize();

// Expose Reveal globally for PDF export tools (e.g., decktape)
if (typeof window !== 'undefined') {
  (window as any).Reveal = deck;
}

export default deck;
