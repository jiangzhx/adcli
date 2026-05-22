import type { LeadsAddInfoStruct, LeadsMatchType } from "../v3/index";
export interface LeadsAddRequest {
    account_id?: number | string;
    match_type?: LeadsMatchType;
    leads_info_list?: LeadsAddInfoStruct[];
}
