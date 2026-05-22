import type { LeadsMatchType, LeadsUpdateInfoStruct } from "../models";
export interface LeadsUpdateRequest {
    account_id?: number | string;
    match_type?: LeadsMatchType;
    leads_contact_list?: LeadsUpdateInfoStruct[];
}
