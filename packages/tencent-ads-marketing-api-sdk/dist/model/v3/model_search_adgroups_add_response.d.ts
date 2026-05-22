import type { ApiErrorStruct, SearchAdgroupsAddResponseData } from "../v3/index";
export interface SearchAdgroupsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: SearchAdgroupsAddResponseData;
}
