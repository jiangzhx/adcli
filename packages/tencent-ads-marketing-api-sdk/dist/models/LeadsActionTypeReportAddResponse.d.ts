import type { ApiErrorStruct, LeadsActionTypeReportAddResponseData } from "../models";
export interface LeadsActionTypeReportAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsActionTypeReportAddResponseData;
}
