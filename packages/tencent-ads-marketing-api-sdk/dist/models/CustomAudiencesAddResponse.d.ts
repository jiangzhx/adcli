import type { ApiErrorStruct, CustomAudiencesAddResponseData } from "../models";
export interface CustomAudiencesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CustomAudiencesAddResponseData;
}
