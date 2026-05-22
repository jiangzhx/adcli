import type { ApiErrorStruct, ImagesAddResponseData } from "../model/index";
export interface ImagesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ImagesAddResponseData;
}
