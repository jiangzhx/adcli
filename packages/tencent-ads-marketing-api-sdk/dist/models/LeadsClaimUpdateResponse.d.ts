import type { ApiErrorStruct, LeadsClaimUpdateResponseData } from "../models";
export interface LeadsClaimUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsClaimUpdateResponseData;
}
