import type { ApiErrorStruct, ProductCatalogsGetResponseData } from "../models";
export interface ProductCatalogsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProductCatalogsGetResponseData;
}
