import type { ApiErrorStruct, ImageProcessingAddResponseData } from "../models";
export interface ImageProcessingAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ImageProcessingAddResponseData;
}
