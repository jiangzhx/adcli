import type { ApiErrorStruct, ProductCatalogsAddResponseData } from "../v3/index";
export interface ProductCatalogsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProductCatalogsAddResponseData;
}
