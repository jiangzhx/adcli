import type { HeaderStruct } from "../models";
export interface BatchRequestsAddResponseStruct {
    http_code?: number;
    headers?: HeaderStruct[];
    body?: string;
}
