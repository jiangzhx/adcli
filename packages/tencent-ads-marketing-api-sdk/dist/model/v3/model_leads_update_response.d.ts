import type { ApiErrorStruct, LeadsUpdateResponseData } from "../v3/index";
export interface LeadsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsUpdateResponseData;
}
