import type { ApiErrorStruct, QualificationsUpdateResponseData } from "../v3/index";
export interface QualificationsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: QualificationsUpdateResponseData;
}
