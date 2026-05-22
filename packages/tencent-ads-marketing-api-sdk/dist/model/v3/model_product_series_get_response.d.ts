import type { ApiErrorStruct, ProductSeriesGetResponseData } from "../v3/index";
export interface ProductSeriesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProductSeriesGetResponseData;
}
