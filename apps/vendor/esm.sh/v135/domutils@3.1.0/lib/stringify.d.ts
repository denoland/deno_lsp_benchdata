import { AnyNode } from "https://esm.sh/v135/domhandler@5.0.3/lib/index.d.ts";
import { DomSerializerOptions } from "https://esm.sh/v135/dom-serializer@2.0.0/lib/index.d.ts";
/**
 * @category Stringify
 * @deprecated Use the `dom-serializer` module directly.
 * @param node Node to get the outer HTML of.
 * @param options Options for serialization.
 * @returns `node`'s outer HTML.
 */
export declare function getOuterHTML(node: AnyNode | ArrayLike<AnyNode>, options?: DomSerializerOptions): string;
/**
 * @category Stringify
 * @deprecated Use the `dom-serializer` module directly.
 * @param node Node to get the inner HTML of.
 * @param options Options for serialization.
 * @returns `node`'s inner HTML.
 */
export declare function getInnerHTML(node: AnyNode, options?: DomSerializerOptions): string;
/**
 * Get a node's inner text. Same as `textContent`, but inserts newlines for `<br>` tags. Ignores comments.
 *
 * @category Stringify
 * @deprecated Use `textContent` instead.
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 */
export declare function getText(node: AnyNode | AnyNode[]): string;
/**
 * Get a node's text content. Ignores comments.
 *
 * @category Stringify
 * @param node Node to get the text content of.
 * @returns `node`'s text content.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent}
 */
export declare function textContent(node: AnyNode | AnyNode[]): string;
/**
 * Get a node's inner text, ignoring `<script>` and `<style>` tags. Ignores comments.
 *
 * @category Stringify
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText}
 */
export declare function innerText(node: AnyNode | AnyNode[]): string;
//# sourceMappingURL=stringify.d.ts.map
