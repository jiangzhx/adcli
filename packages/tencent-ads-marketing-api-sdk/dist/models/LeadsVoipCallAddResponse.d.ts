import type { ApiErrorStruct, LeadsVoipCallAddResponseData } from "../models";
export interface LeadsVoipCallAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsVoipCallAddResponseData;
}
