import type { ApiErrorStruct, LeadCluesGetResponseData } from "../models";
export interface LeadCluesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadCluesGetResponseData;
}
