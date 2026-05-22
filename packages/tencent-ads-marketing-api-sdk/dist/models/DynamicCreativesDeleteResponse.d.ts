import type { ApiErrorStruct, DynamicCreativesDeleteResponseData } from "../models";
export interface DynamicCreativesDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicCreativesDeleteResponseData;
}
