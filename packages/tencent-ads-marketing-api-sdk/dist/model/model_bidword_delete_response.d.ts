import type { ApiErrorStruct, BidwordDeleteResponseData } from "../model/index";
export interface BidwordDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BidwordDeleteResponseData;
}
