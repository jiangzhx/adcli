import type { ApiErrorStruct, LeadsCallTokenGetResponseData } from "../model/index";
export interface LeadsCallTokenGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsCallTokenGetResponseData;
}
