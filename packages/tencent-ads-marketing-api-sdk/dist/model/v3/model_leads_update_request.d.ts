import type { LeadsMatchType, LeadsUpdateInfoStruct } from "../v3/index";
export interface LeadsUpdateRequest {
    account_id?: number | string;
    match_type?: LeadsMatchType;
    leads_contact_list?: LeadsUpdateInfoStruct[];
}
