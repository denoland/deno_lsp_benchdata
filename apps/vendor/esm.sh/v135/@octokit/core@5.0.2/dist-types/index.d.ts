import type { HookCollection } from "https://esm.sh/v135/before-after-hook@2.2.3/index.d.ts";
import { request } from "https://esm.sh/v135/@octokit/request@8.1.5/dist-types/index.d.ts";
import { graphql } from "https://esm.sh/v135/@octokit/graphql@7.0.2/dist-types/index.d.ts";
import type { Constructor, Hooks, OctokitOptions, OctokitPlugin, ReturnTypeOf, UnionToIntersection } from "./types.d.ts";
export declare class Octokit {
    static VERSION: string;
    static defaults<S extends Constructor<any>>(this: S, defaults: OctokitOptions | Function): S;
    static plugins: OctokitPlugin[];
    /**
     * Attach a plugin (or many) to your Octokit instance.
     *
     * @example
     * const API = Octokit.plugin(plugin1, plugin2, plugin3, ...)
     */
    static plugin<S extends Constructor<any> & {
        plugins: any[];
    }, T extends OctokitPlugin[]>(this: S, ...newPlugins: T): S & Constructor<UnionToIntersection<ReturnTypeOf<T>>>;
    constructor(options?: OctokitOptions);
    request: typeof request;
    graphql: typeof graphql;
    log: {
        debug: (message: string, additionalInfo?: object) => any;
        info: (message: string, additionalInfo?: object) => any;
        warn: (message: string, additionalInfo?: object) => any;
        error: (message: string, additionalInfo?: object) => any;
        [key: string]: any;
    };
    hook: HookCollection<Hooks>;
    auth: (...args: unknown[]) => Promise<unknown>;
}
