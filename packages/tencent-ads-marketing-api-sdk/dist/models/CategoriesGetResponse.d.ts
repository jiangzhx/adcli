import type { ApiErrorStruct, CategoriesGetResponseData } from "../models";
export interface CategoriesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CategoriesGetResponseData;
}
