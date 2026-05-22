import type { ApiErrorStruct, XijingPageDeleteResponseData } from "../models";
export interface XijingPageDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: XijingPageDeleteResponseData;
}
