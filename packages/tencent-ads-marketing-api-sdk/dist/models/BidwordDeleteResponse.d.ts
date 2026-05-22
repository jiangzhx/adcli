import type { ApiErrorStruct, BidwordDeleteResponseData } from "../models";
export interface BidwordDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BidwordDeleteResponseData;
}
