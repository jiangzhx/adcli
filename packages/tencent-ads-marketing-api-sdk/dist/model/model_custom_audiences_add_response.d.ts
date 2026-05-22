import type { ApiErrorStruct, CustomAudiencesAddResponseData } from "../model/index";
export interface CustomAudiencesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CustomAudiencesAddResponseData;
}
