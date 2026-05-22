import type { ApiErrorStruct, BidwordAddResponseData } from "../model/index";
export interface BidwordAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BidwordAddResponseData;
}
