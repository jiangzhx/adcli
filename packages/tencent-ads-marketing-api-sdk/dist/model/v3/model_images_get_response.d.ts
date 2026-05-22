import type { ApiErrorStruct, ImagesGetResponseData } from "../v3/index";
export interface ImagesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ImagesGetResponseData;
}
