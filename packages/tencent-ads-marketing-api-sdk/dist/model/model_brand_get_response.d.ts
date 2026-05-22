import type { ApiErrorStruct, BrandGetResponseData } from "../model/index";
export interface BrandGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BrandGetResponseData;
}
