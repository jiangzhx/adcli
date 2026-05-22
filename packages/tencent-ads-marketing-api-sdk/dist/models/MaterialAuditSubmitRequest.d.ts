import type { MaterialAuditSubmitListStruct } from "../models";
export interface MaterialAuditSubmitRequest {
    account_id?: number | string;
    material_list?: MaterialAuditSubmitListStruct[];
}
