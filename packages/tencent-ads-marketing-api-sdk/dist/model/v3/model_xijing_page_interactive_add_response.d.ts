import type { ApiErrorStruct, XijingPageInteractiveAddResponseData } from "../v3/index";
export interface XijingPageInteractiveAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: XijingPageInteractiveAddResponseData;
}
