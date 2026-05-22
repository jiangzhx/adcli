import type { ApiErrorStruct, DcComponentSummaryInfoGetResponseData } from "../models";
export interface DcComponentSummaryInfoGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DcComponentSummaryInfoGetResponseData;
}
