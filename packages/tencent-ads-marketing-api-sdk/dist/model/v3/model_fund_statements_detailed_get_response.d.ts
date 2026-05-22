import type { ApiErrorStruct, FundStatementsDetailedGetResponseData } from "../v3/index";
export interface FundStatementsDetailedGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: FundStatementsDetailedGetResponseData;
}
