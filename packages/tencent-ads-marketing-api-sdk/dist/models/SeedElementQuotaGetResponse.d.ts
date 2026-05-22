import type { ApiErrorStruct, SeedElementQuotaGetResponseData } from "../models";
export interface SeedElementQuotaGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: SeedElementQuotaGetResponseData;
}
