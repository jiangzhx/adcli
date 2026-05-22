import type { MaterialAuditListListStruct } from "../model/index";
export interface MaterialAuditListRequest {
    account_id?: number | string;
    material_list?: MaterialAuditListListStruct[];
}
