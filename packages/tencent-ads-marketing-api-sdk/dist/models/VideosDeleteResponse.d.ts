import type { ApiErrorStruct, VideosDeleteResponseData } from "../models";
export interface VideosDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: VideosDeleteResponseData;
}
