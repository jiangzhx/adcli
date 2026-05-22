import type { ApiErrorStruct, ProductsSystemStatusGetResponseData } from "../v3/index";
export interface ProductsSystemStatusGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProductsSystemStatusGetResponseData;
}
