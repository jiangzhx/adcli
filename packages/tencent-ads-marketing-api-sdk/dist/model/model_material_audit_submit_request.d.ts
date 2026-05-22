import type { MaterialAuditSubmitListStruct } from "../model/index";
export interface MaterialAuditSubmitRequest {
    account_id?: number | string;
    material_list?: MaterialAuditSubmitListStruct[];
}
