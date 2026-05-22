import type { ApiErrorStruct, VideosGetResponseData } from "../v3/index";
export interface VideosGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: VideosGetResponseData;
}
