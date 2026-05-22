import type { ApiErrorStruct, VideosUpdateResponseData } from "../models";
export interface VideosUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: VideosUpdateResponseData;
}
