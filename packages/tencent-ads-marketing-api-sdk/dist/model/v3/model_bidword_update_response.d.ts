import type { ApiErrorStruct, BidwordUpdateResponseData } from "../v3/index";
export interface BidwordUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BidwordUpdateResponseData;
}
