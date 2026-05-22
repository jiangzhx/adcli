import type { ApiErrorStruct, PromotedObjectsDeleteResponseData } from "../model/index";
export interface PromotedObjectsDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PromotedObjectsDeleteResponseData;
}
