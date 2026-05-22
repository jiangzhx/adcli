import type { ApiErrorStruct, BidwordUpdateResponseData } from "../model/index";
export interface BidwordUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BidwordUpdateResponseData;
}
