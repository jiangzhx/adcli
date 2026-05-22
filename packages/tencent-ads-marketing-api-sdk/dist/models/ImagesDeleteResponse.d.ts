import type { ApiErrorStruct, ImagesDeleteResponseData } from "../models";
export interface ImagesDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ImagesDeleteResponseData;
}
