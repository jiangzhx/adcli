import type { ApiErrorStruct, LeadsCallRecordsGetResponseData } from "../models";
export interface LeadsCallRecordsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsCallRecordsGetResponseData;
}
