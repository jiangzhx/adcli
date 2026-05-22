import type { ApiErrorStruct } from "../models";
export interface CustomAudiencesDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
