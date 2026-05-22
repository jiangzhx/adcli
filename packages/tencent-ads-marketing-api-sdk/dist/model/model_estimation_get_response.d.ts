import type { ApiErrorStruct, EstimationGetResponseData } from "../model/index";
export interface EstimationGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: EstimationGetResponseData;
}
