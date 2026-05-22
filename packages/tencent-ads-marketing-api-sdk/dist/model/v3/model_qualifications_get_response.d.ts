import type { ApiErrorStruct, QualificationsGetResponseData } from "../v3/index";
export interface QualificationsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: QualificationsGetResponseData;
}
