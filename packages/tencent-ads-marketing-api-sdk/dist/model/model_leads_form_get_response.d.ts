import type { ApiErrorStruct, LeadsFormGetResponseData } from "../model/index";
export interface LeadsFormGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsFormGetResponseData;
}
