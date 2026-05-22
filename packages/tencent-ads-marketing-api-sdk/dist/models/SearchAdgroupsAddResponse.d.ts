import type { ApiErrorStruct, SearchAdgroupsAddResponseData } from "../models";
export interface SearchAdgroupsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: SearchAdgroupsAddResponseData;
}
