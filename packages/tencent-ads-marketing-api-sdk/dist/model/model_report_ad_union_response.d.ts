import type { ApiErrorStruct, ReportAdUnionResponseData } from "../model/index";
export interface ReportAdUnionResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ReportAdUnionResponseData;
}
