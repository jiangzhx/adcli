import type { ApiErrorStruct, CreativeSampleProductsGetResponseData } from "../models";
export interface CreativeSampleProductsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CreativeSampleProductsGetResponseData;
}
