import type { ApiErrorStruct, BrandAddResponseData } from "../model/index";
export interface BrandAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BrandAddResponseData;
}
