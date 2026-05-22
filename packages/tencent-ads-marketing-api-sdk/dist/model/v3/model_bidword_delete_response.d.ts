import type { ApiErrorStruct, BidwordDeleteResponseData } from "../v3/index";
export interface BidwordDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BidwordDeleteResponseData;
}
