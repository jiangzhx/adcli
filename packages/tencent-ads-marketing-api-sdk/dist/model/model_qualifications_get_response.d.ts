import type { ApiErrorStruct, QualificationsGetResponseData } from "../model/index";
export interface QualificationsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: QualificationsGetResponseData;
}
