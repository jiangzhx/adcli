import type { AdAppealQuotaGetResponseData, ApiErrorStruct } from "../models";
export interface AdAppealQuotaGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdAppealQuotaGetResponseData;
}
