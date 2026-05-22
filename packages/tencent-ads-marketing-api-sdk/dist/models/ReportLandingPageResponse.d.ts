import type { ApiErrorStruct, ReportLandingPageResponseData } from "../models";
export interface ReportLandingPageResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ReportLandingPageResponseData;
}
