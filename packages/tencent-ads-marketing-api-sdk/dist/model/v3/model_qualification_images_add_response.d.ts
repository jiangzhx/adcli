import type { ApiErrorStruct, QualificationImagesAddResponseData } from "../v3/index";
export interface QualificationImagesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: QualificationImagesAddResponseData;
}
