import type { ApiErrorStruct, BidwordGetResponseData } from "../models";
export interface BidwordGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BidwordGetResponseData;
}
