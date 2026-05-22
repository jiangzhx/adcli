import type { OuterCluesAddListStruct, SuccessLeadsIdListRespStruct } from "../model/index";
export interface OuterCluesAddResponseData {
    fail_outer_lead_id_list?: OuterCluesAddListStruct[];
    success_lead_id_list?: SuccessLeadsIdListRespStruct[];
}
