import type { ApiErrorStruct, MaterialAuditSubmitResponseData } from "../models";
export interface MaterialAuditSubmitResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MaterialAuditSubmitResponseData;
}
