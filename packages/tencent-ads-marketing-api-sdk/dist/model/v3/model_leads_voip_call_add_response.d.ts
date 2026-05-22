import type { ApiErrorStruct, LeadsVoipCallAddResponseData } from "../v3/index";
export interface LeadsVoipCallAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsVoipCallAddResponseData;
}
