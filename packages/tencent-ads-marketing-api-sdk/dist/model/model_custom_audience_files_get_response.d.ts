import type { ApiErrorStruct, CustomAudienceFilesGetResponseData } from "../model/index";
export interface CustomAudienceFilesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CustomAudienceFilesGetResponseData;
}
