import type { ApiErrorStruct, DynamicCreativesAddResponseData } from "../models";
export interface DynamicCreativesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicCreativesAddResponseData;
}
