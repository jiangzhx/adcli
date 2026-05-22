import type { ApiErrorStruct, ImagesUpdateResponseData } from "../models";
export interface ImagesUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ImagesUpdateResponseData;
}
