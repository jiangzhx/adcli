import type { ApiErrorStruct, QualificationsUpdateResponseData } from "../models";
export interface QualificationsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: QualificationsUpdateResponseData;
}
