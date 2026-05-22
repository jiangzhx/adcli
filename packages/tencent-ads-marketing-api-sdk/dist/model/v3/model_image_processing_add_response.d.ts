import type { ApiErrorStruct, ImageProcessingAddResponseData } from "../v3/index";
export interface ImageProcessingAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ImageProcessingAddResponseData;
}
