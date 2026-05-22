import type { ApiErrorStruct, LeadsStatusUpdateResponseData } from "../v3/index";
export interface LeadsStatusUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsStatusUpdateResponseData;
}
