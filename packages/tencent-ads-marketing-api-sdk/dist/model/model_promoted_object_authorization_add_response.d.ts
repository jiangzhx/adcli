import type { ApiErrorStruct, PromotedObjectAuthorizationAddResponseData } from "../model/index";
export interface PromotedObjectAuthorizationAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PromotedObjectAuthorizationAddResponseData;
}
