import type { ApiErrorStruct, CustomAudiencesGetResponseData } from "../v3/index";
export interface CustomAudiencesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CustomAudiencesGetResponseData;
}
