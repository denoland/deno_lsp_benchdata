import type { OctokitRequest } from "./types.d.ts";
export declare function unknownRouteResponse(request: OctokitRequest): {
    status: number;
    headers: {
        "content-type": string;
    };
    text: string;
};
