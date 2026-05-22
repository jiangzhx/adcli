import type { AdDiagnosisGetResponseData, ApiErrorStruct } from "../model/index";
export interface AdDiagnosisGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdDiagnosisGetResponseData;
}
