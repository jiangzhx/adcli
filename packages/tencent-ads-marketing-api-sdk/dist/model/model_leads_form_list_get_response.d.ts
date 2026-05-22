import type { ApiErrorStruct, LeadsFormListGetResponseData } from "../model/index";
export interface LeadsFormListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsFormListGetResponseData;
}
