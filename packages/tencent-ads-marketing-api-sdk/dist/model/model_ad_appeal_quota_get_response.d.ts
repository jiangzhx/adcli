import type { AdAppealQuotaGetResponseData, ApiErrorStruct } from "../model/index";
export interface AdAppealQuotaGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdAppealQuotaGetResponseData;
}
