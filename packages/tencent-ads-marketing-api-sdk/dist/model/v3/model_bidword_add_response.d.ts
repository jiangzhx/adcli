import type { ApiErrorStruct, BidwordAddResponseData } from "../v3/index";
export interface BidwordAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BidwordAddResponseData;
}
