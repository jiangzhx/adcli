import type { ApiErrorStruct, ProductSeriesGetResponseData } from "../models";
export interface ProductSeriesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProductSeriesGetResponseData;
}
