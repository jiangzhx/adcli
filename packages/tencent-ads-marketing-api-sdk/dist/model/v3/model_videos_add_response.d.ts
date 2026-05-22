import type { ApiErrorStruct, VideosAddResponseData } from "../v3/index";
export interface VideosAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: VideosAddResponseData;
}
