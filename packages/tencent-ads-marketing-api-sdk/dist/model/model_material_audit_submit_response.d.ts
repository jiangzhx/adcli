import type { ApiErrorStruct, MaterialAuditSubmitResponseData } from "../model/index";
export interface MaterialAuditSubmitResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MaterialAuditSubmitResponseData;
}
