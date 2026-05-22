import type { ApiErrorStruct, ImagesUpdateResponseData } from "../v3/index";
export interface ImagesUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ImagesUpdateResponseData;
}
