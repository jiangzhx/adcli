import type { ApiErrorStruct, XijingPageInteractiveAddResponseData } from "../models";
export interface XijingPageInteractiveAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: XijingPageInteractiveAddResponseData;
}
