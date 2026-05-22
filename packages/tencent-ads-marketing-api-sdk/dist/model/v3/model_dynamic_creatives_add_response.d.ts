import type { ApiErrorStruct, DynamicCreativesAddResponseData } from "../v3/index";
export interface DynamicCreativesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicCreativesAddResponseData;
}
