import type { HeaderStruct } from "../model/index";
export interface BatchRequestsAddListStruct {
    http_code?: number;
    headers?: HeaderStruct[];
    body?: string;
}
