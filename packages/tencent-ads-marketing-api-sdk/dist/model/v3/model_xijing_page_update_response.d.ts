import type { ApiErrorStruct, XijingPageUpdateResponseData } from "../v3/index";
export interface XijingPageUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: XijingPageUpdateResponseData;
}
