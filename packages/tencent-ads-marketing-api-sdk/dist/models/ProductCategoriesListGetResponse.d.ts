import type { ApiErrorStruct, ProductCategoriesListGetResponseData } from "../models";
export interface ProductCategoriesListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProductCategoriesListGetResponseData;
}
