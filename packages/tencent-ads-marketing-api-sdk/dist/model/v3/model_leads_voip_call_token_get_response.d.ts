import type { ApiErrorStruct, LeadsVoipCallTokenGetResponseData } from "../v3/index";
export interface LeadsVoipCallTokenGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsVoipCallTokenGetResponseData;
}
