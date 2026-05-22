import type { ApiErrorStruct, DynamicCreativesGetResponseData } from "../models";
export interface DynamicCreativesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicCreativesGetResponseData;
}
