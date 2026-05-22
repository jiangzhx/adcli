import type { ApiErrorStruct, ProductSeriesAddResponseData } from "../v3/index";
export interface ProductSeriesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ProductSeriesAddResponseData;
}
