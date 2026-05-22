import type { ApiErrorStruct, XijingPageDeleteResponseData } from "../v3/index";
export interface XijingPageDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: XijingPageDeleteResponseData;
}
