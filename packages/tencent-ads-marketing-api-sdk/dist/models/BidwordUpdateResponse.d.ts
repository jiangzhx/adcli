import type { ApiErrorStruct, BidwordUpdateResponseData } from "../models";
export interface BidwordUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BidwordUpdateResponseData;
}
