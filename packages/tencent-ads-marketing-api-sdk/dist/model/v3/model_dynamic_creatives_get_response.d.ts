import type { ApiErrorStruct, DynamicCreativesGetResponseData } from "../v3/index";
export interface DynamicCreativesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicCreativesGetResponseData;
}
