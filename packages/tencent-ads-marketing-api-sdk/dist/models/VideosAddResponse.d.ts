import type { ApiErrorStruct, VideosAddResponseData } from "../models";
export interface VideosAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: VideosAddResponseData;
}
