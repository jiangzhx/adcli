import type { ApiErrorStruct, RealtimeCostGetResponseData } from "../models";
export interface RealtimeCostGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: RealtimeCostGetResponseData;
}
