import type { ApiErrorStruct, LeadsFormGetResponseData } from "../models";
export interface LeadsFormGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsFormGetResponseData;
}
