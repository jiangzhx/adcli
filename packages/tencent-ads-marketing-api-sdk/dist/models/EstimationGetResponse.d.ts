import type { ApiErrorStruct, EstimationGetResponseData } from "../models";
export interface EstimationGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: EstimationGetResponseData;
}
