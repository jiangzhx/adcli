import type { ApiErrorStruct, ReportVideoFrameResponseData } from "../models";
export interface ReportVideoFrameResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ReportVideoFrameResponseData;
}
