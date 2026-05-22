import type { ApiErrorStruct, PromotedObjectsGetResponseData } from "../model/index";
export interface PromotedObjectsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PromotedObjectsGetResponseData;
}
