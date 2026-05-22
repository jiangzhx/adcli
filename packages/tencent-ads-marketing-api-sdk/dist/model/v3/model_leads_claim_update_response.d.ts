import type { ApiErrorStruct, LeadsClaimUpdateResponseData } from "../v3/index";
export interface LeadsClaimUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsClaimUpdateResponseData;
}
