import type { ApiErrorStruct, QualificationsGetResponseData } from "../models";
export interface QualificationsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: QualificationsGetResponseData;
}
