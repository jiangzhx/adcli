import type { ApiErrorStruct, CategoriesAttributeGetResponseData } from "../models";
export interface CategoriesAttributeGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CategoriesAttributeGetResponseData;
}
