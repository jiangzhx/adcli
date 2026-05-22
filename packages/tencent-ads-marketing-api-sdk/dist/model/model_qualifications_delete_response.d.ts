import type { ApiErrorStruct, QualificationsDeleteResponseData } from "../model/index";
export interface QualificationsDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: QualificationsDeleteResponseData;
}
