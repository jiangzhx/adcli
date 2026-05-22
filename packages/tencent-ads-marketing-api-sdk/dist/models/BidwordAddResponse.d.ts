import type { ApiErrorStruct, BidwordAddResponseData } from "../models";
export interface BidwordAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BidwordAddResponseData;
}
