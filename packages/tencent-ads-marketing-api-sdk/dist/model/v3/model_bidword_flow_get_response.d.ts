import type { ApiErrorStruct, BidwordFlowGetResponseData } from "../v3/index";
export interface BidwordFlowGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BidwordFlowGetResponseData;
}
