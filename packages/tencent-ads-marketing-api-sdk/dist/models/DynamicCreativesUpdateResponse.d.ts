import type { ApiErrorStruct, DynamicCreativesUpdateResponseData } from "../models";
export interface DynamicCreativesUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicCreativesUpdateResponseData;
}
