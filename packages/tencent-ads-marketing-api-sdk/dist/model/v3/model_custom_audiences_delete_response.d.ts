import type { ApiErrorStruct } from "../v3/index";
export interface CustomAudiencesDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
