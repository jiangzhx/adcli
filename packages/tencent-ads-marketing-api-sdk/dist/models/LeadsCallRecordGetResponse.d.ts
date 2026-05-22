import type { ApiErrorStruct, LeadsCallRecordGetResponseData } from "../models";
export interface LeadsCallRecordGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsCallRecordGetResponseData;
}
