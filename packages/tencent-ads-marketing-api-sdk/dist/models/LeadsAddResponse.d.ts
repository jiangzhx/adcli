import type { ApiErrorStruct, LeadsAddResponseData } from "../models";
export interface LeadsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsAddResponseData;
}
