import type { ApiErrorStruct, PromotedObjectsUpdateResponseData } from "../models";
export interface PromotedObjectsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PromotedObjectsUpdateResponseData;
}
