import type { ApiErrorStruct, MergeFundTypeFundStatementsDetailedGetResponseData } from "../models";
export interface MergeFundTypeFundStatementsDetailedGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MergeFundTypeFundStatementsDetailedGetResponseData;
}
