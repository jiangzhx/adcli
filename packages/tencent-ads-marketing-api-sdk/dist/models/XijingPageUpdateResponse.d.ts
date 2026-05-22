import type { ApiErrorStruct, XijingPageUpdateResponseData } from "../models";
export interface XijingPageUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: XijingPageUpdateResponseData;
}
