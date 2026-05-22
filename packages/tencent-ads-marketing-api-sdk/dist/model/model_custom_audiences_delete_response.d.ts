import type { ApiErrorStruct } from "../model/index";
export interface CustomAudiencesDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
