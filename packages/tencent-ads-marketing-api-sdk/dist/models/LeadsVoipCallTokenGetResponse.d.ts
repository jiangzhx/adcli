import type { ApiErrorStruct, LeadsVoipCallTokenGetResponseData } from "../models";
export interface LeadsVoipCallTokenGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsVoipCallTokenGetResponseData;
}
