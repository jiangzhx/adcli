import type { ApiErrorStruct, VideosUpdateResponseData } from "../v3/index";
export interface VideosUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: VideosUpdateResponseData;
}
