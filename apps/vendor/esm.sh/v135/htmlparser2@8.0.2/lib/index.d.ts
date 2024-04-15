import { Parser, ParserOptions } from "./Parser.d.ts";
export { Parser, type ParserOptions } from "./Parser.d.ts";
import { DomHandlerOptions, ChildNode, Element, Document } from "https://esm.sh/v135/domhandler@5.0.3/lib/index.d.ts";
export { DomHandler, DomHandler as DefaultHandler, type DomHandlerOptions, } from "https://esm.sh/v135/domhandler@5.0.3/lib/index.d.ts";
export type Options = ParserOptions & DomHandlerOptions;
/**
 * Parses the data, returns the resulting document.
 *
 * @param data The data that should be parsed.
 * @param options Optional options for the parser and DOM builder.
 */
export declare function parseDocument(data: string, options?: Options): Document;
/**
 * Parses data, returns an array of the root nodes.
 *
 * Note that the root nodes still have a `Document` node as their parent.
 * Use `parseDocument` to get the `Document` node instead.
 *
 * @param data The data that should be parsed.
 * @param options Optional options for the parser and DOM builder.
 * @deprecated Use `parseDocument` instead.
 */
export declare function parseDOM(data: string, options?: Options): ChildNode[];
/**
 * Creates a parser instance, with an attached DOM handler.
 *
 * @param callback A callback that will be called once parsing has been completed.
 * @param options Optional options for the parser and DOM builder.
 * @param elementCallback An optional callback that will be called every time a tag has been completed inside of the DOM.
 */
export declare function createDomStream(callback: (error: Error | null, dom: ChildNode[]) => void, options?: Options, elementCallback?: (element: Element) => void): Parser;
export { default as Tokenizer, type Callbacks as TokenizerCallbacks, } from "./Tokenizer.d.ts";
export * as ElementType from "https://esm.sh/v135/domelementtype@2.3.0/lib/index.d.ts";
import { Feed } from "https://esm.sh/v135/domutils@3.1.0/lib/index.d.ts";
export { getFeed } from "https://esm.sh/v135/domutils@3.1.0/lib/index.d.ts";
/**
 * Parse a feed.
 *
 * @param feed The feed that should be parsed, as a string.
 * @param options Optionally, options for parsing. When using this, you should set `xmlMode` to `true`.
 */
export declare function parseFeed(feed: string, options?: Options): Feed | null;
export * as DomUtils from "https://esm.sh/v135/domutils@3.1.0/lib/index.d.ts";
//# sourceMappingURL=index.d.ts.map
