import type { ApiErrorStruct, LeadCluesGetResponseData } from "../model/index";
export interface LeadCluesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadCluesGetResponseData;
}
