import type { ApiErrorStruct, XijingPageAddResponseData } from "../v3/index";
export interface XijingPageAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: XijingPageAddResponseData;
}
