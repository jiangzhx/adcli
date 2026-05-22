import type { ApiErrorStruct, LeadsFormAddResponseData } from "../model/index";
export interface LeadsFormAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsFormAddResponseData;
}
