import type { ApiErrorStruct, OuterCluesActionTypeReportResponseData } from "../model/index";
export interface OuterCluesActionTypeReportResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OuterCluesActionTypeReportResponseData;
}
