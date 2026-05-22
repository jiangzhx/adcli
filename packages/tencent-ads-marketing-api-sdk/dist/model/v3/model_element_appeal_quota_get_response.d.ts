import type { ApiErrorStruct, ElementAppealQuotaGetResponseData } from "../v3/index";
export interface ElementAppealQuotaGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ElementAppealQuotaGetResponseData;
}
