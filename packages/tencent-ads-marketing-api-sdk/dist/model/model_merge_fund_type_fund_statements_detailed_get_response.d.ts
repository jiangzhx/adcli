import type { ApiErrorStruct, MergeFundTypeFundStatementsDetailedGetResponseData } from "../model/index";
export interface MergeFundTypeFundStatementsDetailedGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MergeFundTypeFundStatementsDetailedGetResponseData;
}
