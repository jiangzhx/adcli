import type { ApiErrorStruct, ReportVideoFrameResponseData } from "../model/index";
export interface ReportVideoFrameResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ReportVideoFrameResponseData;
}
