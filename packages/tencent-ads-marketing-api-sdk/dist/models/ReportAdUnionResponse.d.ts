import type { ApiErrorStruct, ReportAdUnionResponseData } from "../models";
export interface ReportAdUnionResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ReportAdUnionResponseData;
}
