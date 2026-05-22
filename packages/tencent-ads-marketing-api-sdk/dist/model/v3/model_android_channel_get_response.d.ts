import type { AndroidChannelGetResponseData, ApiErrorStruct } from "../v3/index";
export interface AndroidChannelGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AndroidChannelGetResponseData;
}
