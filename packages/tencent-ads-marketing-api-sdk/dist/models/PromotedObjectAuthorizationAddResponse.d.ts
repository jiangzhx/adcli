import type { ApiErrorStruct, PromotedObjectAuthorizationAddResponseData } from "../models";
export interface PromotedObjectAuthorizationAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PromotedObjectAuthorizationAddResponseData;
}
