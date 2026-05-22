import type { LeadsAddListStruct, SuccessLeadsIdListRespStruct } from "../v3/index";
export interface LeadsAddResponseData {
    fail_outer_lead_id_list?: LeadsAddListStruct[];
    success_lead_id_list?: SuccessLeadsIdListRespStruct[];
}
