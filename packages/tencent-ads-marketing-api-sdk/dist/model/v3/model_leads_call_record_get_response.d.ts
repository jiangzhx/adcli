import type { ApiErrorStruct, LeadsCallRecordGetResponseData } from "../v3/index";
export interface LeadsCallRecordGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsCallRecordGetResponseData;
}
