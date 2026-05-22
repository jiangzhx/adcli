import type { ApiErrorStruct, ComplianceValidationGetResponseData } from "../models";
export interface ComplianceValidationGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ComplianceValidationGetResponseData;
}
