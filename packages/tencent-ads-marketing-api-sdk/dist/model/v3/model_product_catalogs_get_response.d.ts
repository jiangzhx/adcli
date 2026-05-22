import type { ApiErrorStruct, ProductCatalogsGetResponseData } from "../v3/index";
export interface ProductCatalogsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProductCatalogsGetResponseData;
}
