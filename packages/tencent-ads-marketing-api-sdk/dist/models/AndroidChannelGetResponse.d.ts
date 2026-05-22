import type { AndroidChannelGetResponseData, ApiErrorStruct } from "../models";
export interface AndroidChannelGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AndroidChannelGetResponseData;
}
