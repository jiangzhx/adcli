import type { ApiErrorStruct, CustomAudienceFilesAddResponseData } from "../models";
export interface CustomAudienceFilesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CustomAudienceFilesAddResponseData;
}
