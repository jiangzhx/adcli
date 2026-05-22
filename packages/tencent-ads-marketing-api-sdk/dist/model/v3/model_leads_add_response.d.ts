import type { ApiErrorStruct, LeadsAddResponseData } from "../v3/index";
export interface LeadsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsAddResponseData;
}
