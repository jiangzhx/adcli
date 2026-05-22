import type { ApiErrorStruct, ProductCategoriesListGetResponseData } from "../v3/index";
export interface ProductCategoriesListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProductCategoriesListGetResponseData;
}
