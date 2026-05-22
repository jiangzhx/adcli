import type { ApiErrorStruct, CustomAudiencesAddResponseData } from "../v3/index";
export interface CustomAudiencesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CustomAudiencesAddResponseData;
}
