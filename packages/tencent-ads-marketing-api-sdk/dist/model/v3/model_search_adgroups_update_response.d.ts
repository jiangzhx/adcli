import type { ApiErrorStruct, SearchAdgroupsUpdateResponseData } from "../v3/index";
export interface SearchAdgroupsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: SearchAdgroupsUpdateResponseData;
}
