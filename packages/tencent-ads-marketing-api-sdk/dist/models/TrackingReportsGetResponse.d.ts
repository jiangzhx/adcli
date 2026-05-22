import type { ApiErrorStruct, TrackingReportsGetResponseData } from "../models";
export interface TrackingReportsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: TrackingReportsGetResponseData;
}
