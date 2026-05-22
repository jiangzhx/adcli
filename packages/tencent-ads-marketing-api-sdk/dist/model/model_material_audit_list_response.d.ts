import type { ApiErrorStruct, MaterialAuditListResponseData } from "../model/index";
export interface MaterialAuditListResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MaterialAuditListResponseData;
}
