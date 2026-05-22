import type { ApiErrorStruct, BrandAddResponseData } from "../v3/index";
export interface BrandAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BrandAddResponseData;
}
