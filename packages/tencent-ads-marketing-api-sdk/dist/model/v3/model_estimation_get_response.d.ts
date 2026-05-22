import type { ApiErrorStruct, EstimationGetResponseData } from "../v3/index";
export interface EstimationGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: EstimationGetResponseData;
}
