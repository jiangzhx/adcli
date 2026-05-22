import type { ApiErrorStruct, ComplianceValidationGetResponseData } from "../model/index";
export interface ComplianceValidationGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: ComplianceValidationGetResponseData;
}
