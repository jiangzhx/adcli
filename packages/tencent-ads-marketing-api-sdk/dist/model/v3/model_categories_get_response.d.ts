import type { ApiErrorStruct, CategoriesGetResponseData } from "../v3/index";
export interface CategoriesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CategoriesGetResponseData;
}
