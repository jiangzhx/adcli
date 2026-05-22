import type { ApiErrorStruct, VideosDeleteResponseData } from "../v3/index";
export interface VideosDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: VideosDeleteResponseData;
}
