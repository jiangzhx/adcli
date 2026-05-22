import type { ApiErrorStruct } from "../model/index";
export interface LeadCluesUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
