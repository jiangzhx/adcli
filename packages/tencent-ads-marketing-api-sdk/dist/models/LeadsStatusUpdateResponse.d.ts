import type { ApiErrorStruct, LeadsStatusUpdateResponseData } from "../models";
export interface LeadsStatusUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsStatusUpdateResponseData;
}
