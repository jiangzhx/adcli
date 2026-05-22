import type { ApiErrorStruct, CustomAudienceFilesGetResponseData } from "../models";
export interface CustomAudienceFilesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CustomAudienceFilesGetResponseData;
}
