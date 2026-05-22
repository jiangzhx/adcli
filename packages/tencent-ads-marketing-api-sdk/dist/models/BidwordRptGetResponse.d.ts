import type { ApiErrorStruct, BidwordRptGetResponseData } from "../models";
export interface BidwordRptGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BidwordRptGetResponseData;
}
