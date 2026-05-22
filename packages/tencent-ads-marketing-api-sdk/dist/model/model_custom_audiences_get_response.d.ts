import type { ApiErrorStruct, CustomAudiencesGetResponseData } from "../model/index";
export interface CustomAudiencesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CustomAudiencesGetResponseData;
}
