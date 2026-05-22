import type { ApiErrorStruct, XijingPageListGetResponseData } from "../model/index";
export interface XijingPageListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: XijingPageListGetResponseData;
}
