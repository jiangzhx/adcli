import type { ApiErrorStruct, ImagesDeleteResponseData } from "../v3/index";
export interface ImagesDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ImagesDeleteResponseData;
}
