import type { ApiErrorStruct, ImagesAddResponseData } from "../v3/index";
export interface ImagesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ImagesAddResponseData;
}
