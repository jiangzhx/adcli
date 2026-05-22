import type { ApiErrorStruct, BidwordFlowGetResponseData } from "../model/index";
export interface BidwordFlowGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BidwordFlowGetResponseData;
}
