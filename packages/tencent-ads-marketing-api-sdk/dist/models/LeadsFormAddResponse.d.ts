import type { ApiErrorStruct, LeadsFormAddResponseData } from "../models";
export interface LeadsFormAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsFormAddResponseData;
}
