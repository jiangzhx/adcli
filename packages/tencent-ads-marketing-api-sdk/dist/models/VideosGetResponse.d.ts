import type { ApiErrorStruct, VideosGetResponseData } from "../models";
export interface VideosGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: VideosGetResponseData;
}
