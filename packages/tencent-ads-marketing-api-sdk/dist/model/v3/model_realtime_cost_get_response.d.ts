import type { ApiErrorStruct, RealtimeCostGetResponseData } from "../v3/index";
export interface RealtimeCostGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: RealtimeCostGetResponseData;
}
