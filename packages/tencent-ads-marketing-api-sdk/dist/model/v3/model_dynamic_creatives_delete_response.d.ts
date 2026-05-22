import type { ApiErrorStruct, DynamicCreativesDeleteResponseData } from "../v3/index";
export interface DynamicCreativesDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicCreativesDeleteResponseData;
}
