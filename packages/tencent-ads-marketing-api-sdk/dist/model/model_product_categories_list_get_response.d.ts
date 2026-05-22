import type { ApiErrorStruct, ProductCategoriesListGetResponseData } from "../model/index";
export interface ProductCategoriesListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProductCategoriesListGetResponseData;
}
