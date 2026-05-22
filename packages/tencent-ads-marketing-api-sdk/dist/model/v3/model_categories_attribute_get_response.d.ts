import type { ApiErrorStruct, CategoriesAttributeGetResponseData } from "../v3/index";
export interface CategoriesAttributeGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CategoriesAttributeGetResponseData;
}
