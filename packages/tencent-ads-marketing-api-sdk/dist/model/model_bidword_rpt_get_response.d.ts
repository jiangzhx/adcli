import type { ApiErrorStruct, BidwordRptGetResponseData } from "../model/index";
export interface BidwordRptGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BidwordRptGetResponseData;
}
