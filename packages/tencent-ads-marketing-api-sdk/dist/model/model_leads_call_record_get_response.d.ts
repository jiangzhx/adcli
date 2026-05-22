import type { ApiErrorStruct, LeadsCallRecordGetResponseData } from "../model/index";
export interface LeadsCallRecordGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsCallRecordGetResponseData;
}
