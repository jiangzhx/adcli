import type { ApiErrorStruct, PromotedObjectsAddResponseData } from "../model/index";
export interface PromotedObjectsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PromotedObjectsAddResponseData;
}
