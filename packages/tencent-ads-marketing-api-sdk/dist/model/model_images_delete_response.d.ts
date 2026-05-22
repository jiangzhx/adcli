import type { ApiErrorStruct, ImagesDeleteResponseData } from "../model/index";
export interface ImagesDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ImagesDeleteResponseData;
}
