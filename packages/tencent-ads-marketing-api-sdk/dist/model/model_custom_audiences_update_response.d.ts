import type { ApiErrorStruct } from "../model/index";
export interface CustomAudiencesUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
