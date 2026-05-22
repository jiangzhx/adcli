import type { ApiErrorStruct, CustomAudienceFilesAddResponseData } from "../v3/index";
export interface CustomAudienceFilesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CustomAudienceFilesAddResponseData;
}
