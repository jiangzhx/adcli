import type { ApiErrorStruct, VideosGetResponseData } from "../model/index";
export interface VideosGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: VideosGetResponseData;
}
