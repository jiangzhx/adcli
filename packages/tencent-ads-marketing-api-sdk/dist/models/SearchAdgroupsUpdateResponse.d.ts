import type { ApiErrorStruct, SearchAdgroupsUpdateResponseData } from "../models";
export interface SearchAdgroupsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: SearchAdgroupsUpdateResponseData;
}
