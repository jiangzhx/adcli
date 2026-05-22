import type { AdDiagnosisGetResponseData, ApiErrorStruct } from "../models";
export interface AdDiagnosisGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdDiagnosisGetResponseData;
}
