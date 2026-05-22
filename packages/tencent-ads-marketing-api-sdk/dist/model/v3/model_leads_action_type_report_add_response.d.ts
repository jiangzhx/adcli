import type { ApiErrorStruct, LeadsActionTypeReportAddResponseData } from "../v3/index";
export interface LeadsActionTypeReportAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LeadsActionTypeReportAddResponseData;
}
