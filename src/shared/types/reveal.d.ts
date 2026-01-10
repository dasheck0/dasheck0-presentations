declare module 'reveal.js' {
  export default class Reveal {
    constructor(options?: any);
    initialize(options?: any): Promise<void>;
    slide(h: number, v?: number, f?: number): void;
    on(event: string, callback: () => void): void;
  }
}

declare module 'reveal.js/plugin/markdown/markdown.esm.js' {
  const Markdown: any;
  export default Markdown;
}

declare module 'reveal.js/plugin/highlight/highlight.esm.js' {
  const Highlight: any;
  export default Highlight;
}

declare module 'reveal.js/plugin/notes/notes.esm.js' {
  const Notes: any;
  export default Notes;
}
