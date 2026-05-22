import type { ApiErrorStruct, LeadsCallRecordsGetResponseData } from "../v3/index";
export interface LeadsCallRecordsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsCallRecordsGetResponseData;
}
