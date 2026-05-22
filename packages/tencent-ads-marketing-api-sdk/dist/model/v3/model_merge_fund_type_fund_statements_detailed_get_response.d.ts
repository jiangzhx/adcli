import type { ApiErrorStruct, MergeFundTypeFundStatementsDetailedGetResponseData } from "../v3/index";
export interface MergeFundTypeFundStatementsDetailedGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MergeFundTypeFundStatementsDetailedGetResponseData;
}
