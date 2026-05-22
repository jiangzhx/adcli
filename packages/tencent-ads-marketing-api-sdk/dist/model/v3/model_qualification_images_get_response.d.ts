import type { ApiErrorStruct, QualificationImagesGetResponseData } from "../v3/index";
export interface QualificationImagesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: QualificationImagesGetResponseData;
}
