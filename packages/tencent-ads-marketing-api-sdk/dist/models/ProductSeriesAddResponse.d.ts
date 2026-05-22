import type { ApiErrorStruct, ProductSeriesAddResponseData } from "../models";
export interface ProductSeriesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProductSeriesAddResponseData;
}
