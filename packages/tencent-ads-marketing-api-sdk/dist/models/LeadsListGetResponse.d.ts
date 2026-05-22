import type { ApiErrorStruct, LeadsListGetResponseData } from "../models";
export interface LeadsListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsListGetResponseData;
}
