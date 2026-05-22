import type { ApiErrorStruct, DynamicCreativesUpdateResponseData } from "../model/index";
export interface DynamicCreativesUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicCreativesUpdateResponseData;
}
