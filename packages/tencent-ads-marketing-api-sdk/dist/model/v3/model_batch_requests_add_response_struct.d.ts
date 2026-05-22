import type { HeaderStruct } from "../v3/index";
export interface BatchRequestsAddResponseStruct {
    http_code?: number;
    headers?: HeaderStruct[];
    body?: string;
}
