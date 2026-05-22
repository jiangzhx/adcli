import type { ApiErrorStruct, CustomAudiencesGetResponseData } from "../models";
export interface CustomAudiencesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CustomAudiencesGetResponseData;
}
