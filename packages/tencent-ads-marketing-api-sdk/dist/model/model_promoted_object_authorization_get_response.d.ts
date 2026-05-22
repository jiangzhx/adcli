import type { ApiErrorStruct, PromotedObjectAuthorizationGetResponseData } from "../model/index";
export interface PromotedObjectAuthorizationGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PromotedObjectAuthorizationGetResponseData;
}
