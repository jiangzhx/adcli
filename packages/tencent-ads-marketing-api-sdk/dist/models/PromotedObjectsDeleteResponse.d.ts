import type { ApiErrorStruct, PromotedObjectsDeleteResponseData } from "../models";
export interface PromotedObjectsDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PromotedObjectsDeleteResponseData;
}
