import type { ApiErrorStruct, ElementAppealQuotaGetResponseData } from "../models";
export interface ElementAppealQuotaGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ElementAppealQuotaGetResponseData;
}
