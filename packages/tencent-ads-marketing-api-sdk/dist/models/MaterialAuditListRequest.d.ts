import type { MaterialAuditListListStruct } from "../models";
export interface MaterialAuditListRequest {
    account_id?: number | string;
    material_list?: MaterialAuditListListStruct[];
}
