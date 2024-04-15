import {Service} from '../service.d.ts';
import {Presigner} from '../polly/presigner.d.ts';
export class PollyCustomizations extends Service {
    static Presigner: typeof Presigner;
}
