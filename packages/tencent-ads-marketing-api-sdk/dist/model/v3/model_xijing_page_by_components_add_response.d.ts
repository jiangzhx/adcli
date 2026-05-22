import type { ApiErrorStruct, XijingPageByComponentsAddResponseData } from "../v3/index";
export interface XijingPageByComponentsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: XijingPageByComponentsAddResponseData;
}
