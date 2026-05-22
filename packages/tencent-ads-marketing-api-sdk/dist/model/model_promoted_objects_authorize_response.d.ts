import type { ApiErrorStruct, PromotedObjectsAuthorizeResponseData } from "../model/index";
export interface PromotedObjectsAuthorizeResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PromotedObjectsAuthorizeResponseData;
}
