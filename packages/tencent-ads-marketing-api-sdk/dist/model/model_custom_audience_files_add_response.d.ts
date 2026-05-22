import type { ApiErrorStruct, CustomAudienceFilesAddResponseData } from "../model/index";
export interface CustomAudienceFilesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CustomAudienceFilesAddResponseData;
}
