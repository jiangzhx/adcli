import type { ApiErrorStruct, LeadsCallRecordsGetResponseData } from "../model/index";
export interface LeadsCallRecordsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsCallRecordsGetResponseData;
}
