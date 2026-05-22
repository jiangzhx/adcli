import type { ApiErrorStruct } from "../models";
export interface CustomAudiencesUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
