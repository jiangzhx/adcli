import type { ApiErrorStruct, ImagesGetResponseData } from "../model/index";
export interface ImagesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ImagesGetResponseData;
}
