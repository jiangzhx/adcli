import type { ApiErrorStruct, MaterialAuditListResponseData } from "../models";
export interface MaterialAuditListResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MaterialAuditListResponseData;
}
