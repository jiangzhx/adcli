import type { ApiErrorStruct, QualificationImagesAddResponseData } from "../models";
export interface QualificationImagesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: QualificationImagesAddResponseData;
}
