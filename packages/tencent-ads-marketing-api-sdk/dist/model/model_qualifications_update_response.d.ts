import type { ApiErrorStruct, QualificationsUpdateResponseData } from "../model/index";
export interface QualificationsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: QualificationsUpdateResponseData;
}
