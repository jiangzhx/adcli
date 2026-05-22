import type { ApiErrorStruct, OuterCluesActionTypeReportResponseData } from "../models";
export interface OuterCluesActionTypeReportResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OuterCluesActionTypeReportResponseData;
}
