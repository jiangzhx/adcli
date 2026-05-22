import type { ApiErrorStruct, ImagesAddResponseData } from "../models";
export interface ImagesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ImagesAddResponseData;
}
