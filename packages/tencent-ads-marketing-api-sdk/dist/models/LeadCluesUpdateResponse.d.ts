import type { ApiErrorStruct } from "../models";
export interface LeadCluesUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
