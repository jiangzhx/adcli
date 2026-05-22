import type { ApiErrorStruct, ProductCatalogsAddResponseData } from "../models";
export interface ProductCatalogsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProductCatalogsAddResponseData;
}
