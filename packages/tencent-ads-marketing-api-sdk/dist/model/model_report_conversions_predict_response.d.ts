import type { ApiErrorStruct, ReportConversionsPredictResponseData } from "../model/index";
export interface ReportConversionsPredictResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ReportConversionsPredictResponseData;
}
