import type { ApiErrorStruct, ReportLandingPageResponseData } from "../model/index";
export interface ReportLandingPageResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ReportLandingPageResponseData;
}
