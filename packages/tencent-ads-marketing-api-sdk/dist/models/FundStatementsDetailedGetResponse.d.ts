import type { ApiErrorStruct, FundStatementsDetailedGetResponseData } from "../models";
export interface FundStatementsDetailedGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: FundStatementsDetailedGetResponseData;
}
