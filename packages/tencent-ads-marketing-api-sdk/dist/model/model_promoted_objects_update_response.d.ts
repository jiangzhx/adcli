import type { ApiErrorStruct, PromotedObjectsUpdateResponseData } from "../model/index";
export interface PromotedObjectsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PromotedObjectsUpdateResponseData;
}
