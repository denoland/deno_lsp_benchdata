// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
//                 Leon Yu <https://github.com/leonyu>
//                 BendingBender <https://github.com/BendingBender>
//                 Maple Miao <https://github.com/mapleeit>

/// <reference path="https://esm.sh/v135/node.ns.d.ts" />
import * as stream from 'https://esm.sh/v135/@types/node@18.16.19/stream.d.ts';
import * as http from 'https://esm.sh/v135/@types/node@18.16.19/http.d.ts';

export = FormData;

interface Options {
  writable?: boolean;
  readable?: boolean;
  dataSize?: number;
  maxDataSize?: number;
  pauseStreams?: boolean;
}

declare class FormData extends stream.Readable {
  constructor(options?: Options);
  append(key: string, value: any, options?: FormData.AppendOptions | string): void;
  getHeaders(): FormData.Headers;
  submit(
    params: string | FormData.SubmitOptions,
    callback?: (error: Error | null, response: http.IncomingMessage) => void
  ): http.ClientRequest;
  getBuffer(): Buffer;
  getBoundary(): string;
  getLength(callback: (err: Error | null, length: number) => void): void;
  getLengthSync(): number;
  hasKnownLength(): boolean;
}

declare namespace FormData {
  interface Headers {
    [key: string]: any;
  }

  interface AppendOptions {
    header?: string | Headers;
    knownLength?: number;
    filename?: string;
    filepath?: string;
    contentType?: string;
  }

  interface SubmitOptions extends http.RequestOptions {
    protocol?: 'https:' | 'http:';
  }
}
