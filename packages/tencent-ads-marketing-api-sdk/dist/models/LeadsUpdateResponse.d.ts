import type { ApiErrorStruct, LeadsUpdateResponseData } from "../models";
export interface LeadsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsUpdateResponseData;
}
