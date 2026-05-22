import type { ApiErrorStruct, LeadsCallCreateResponseData } from "../model/index";
export interface LeadsCallCreateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsCallCreateResponseData;
}
