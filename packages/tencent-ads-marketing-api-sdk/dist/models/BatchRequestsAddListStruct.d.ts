import type { HeaderStruct } from "../models";
export interface BatchRequestsAddListStruct {
    http_code?: number;
    headers?: HeaderStruct[];
    body?: string;
}
