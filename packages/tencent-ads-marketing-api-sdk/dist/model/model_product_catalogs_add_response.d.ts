import type { ApiErrorStruct, ProductCatalogsAddResponseData } from "../model/index";
export interface ProductCatalogsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProductCatalogsAddResponseData;
}
