import type { ApiErrorStruct, BidwordGetResponseData } from "../v3/index";
export interface BidwordGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BidwordGetResponseData;
}
