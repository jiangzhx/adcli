import type { ApiErrorStruct, QualificationImagesGetResponseData } from "../models";
export interface QualificationImagesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: QualificationImagesGetResponseData;
}
