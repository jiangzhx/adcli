import type { ApiErrorStruct, PromotedObjectAuthorizationGetResponseData } from "../models";
export interface PromotedObjectAuthorizationGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PromotedObjectAuthorizationGetResponseData;
}
