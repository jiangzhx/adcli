import type { ApiErrorStruct, DynamicCreativesUpdateResponseData } from "../v3/index";
export interface DynamicCreativesUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicCreativesUpdateResponseData;
}
