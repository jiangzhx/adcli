import type { ApiErrorStruct, ImagesGetResponseData } from "../models";
export interface ImagesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ImagesGetResponseData;
}
