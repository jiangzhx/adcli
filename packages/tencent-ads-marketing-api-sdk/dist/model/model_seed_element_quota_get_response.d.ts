import type { ApiErrorStruct, SeedElementQuotaGetResponseData } from "../model/index";
export interface SeedElementQuotaGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: SeedElementQuotaGetResponseData;
}
