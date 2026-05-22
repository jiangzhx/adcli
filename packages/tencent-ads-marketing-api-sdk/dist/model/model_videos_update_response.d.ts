import type { ApiErrorStruct, VideosUpdateResponseData } from "../model/index";
export interface VideosUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: VideosUpdateResponseData;
}
