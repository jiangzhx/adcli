import type { ApiErrorStruct, TrackingReportsGetResponseData } from "../model/index";
export interface TrackingReportsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: TrackingReportsGetResponseData;
}
