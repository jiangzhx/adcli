import type { ApiErrorStruct, XijingPageListGetResponseData } from "../models";
export interface XijingPageListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: XijingPageListGetResponseData;
}
