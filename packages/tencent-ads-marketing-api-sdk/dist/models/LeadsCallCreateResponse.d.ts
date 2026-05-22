import type { ApiErrorStruct, LeadsCallCreateResponseData } from "../models";
export interface LeadsCallCreateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsCallCreateResponseData;
}
