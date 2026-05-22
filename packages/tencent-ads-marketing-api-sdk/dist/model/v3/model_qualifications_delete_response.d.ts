import type { ApiErrorStruct, QualificationsDeleteResponseData } from "../v3/index";
export interface QualificationsDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: QualificationsDeleteResponseData;
}
