import type { ApiErrorStruct, ProductCatalogsReportsGetResponseData } from "../models";
export interface ProductCatalogsReportsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProductCatalogsReportsGetResponseData;
}
