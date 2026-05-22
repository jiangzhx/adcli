import type { ApiErrorStruct, CustomAudienceFilesGetResponseData } from "../v3/index";
export interface CustomAudienceFilesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CustomAudienceFilesGetResponseData;
}
