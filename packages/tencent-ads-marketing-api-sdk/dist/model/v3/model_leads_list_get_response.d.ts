import type { ApiErrorStruct, LeadsListGetResponseData } from "../v3/index";
export interface LeadsListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsListGetResponseData;
}
