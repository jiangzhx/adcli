import type { CustomizedTagsStruct, LeadsImportInfoStruct, LeadsMatchType } from "../model/index";
export interface OuterCluesAddRequest {
    account_id?: number | string;
    match_type?: LeadsMatchType;
    leads_info_list?: LeadsImportInfoStruct[];
    customized_tags?: CustomizedTagsStruct[];
}
