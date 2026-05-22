import type { ApiErrorStruct, LeadsFormListGetResponseData } from "../models";
export interface LeadsFormListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsFormListGetResponseData;
}
