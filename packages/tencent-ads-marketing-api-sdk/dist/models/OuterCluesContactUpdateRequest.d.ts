import type { LeadsContactInfoStruct, LeadsMatchType } from "../models";
export interface OuterCluesContactUpdateRequest {
    account_id?: number | string;
    match_type?: LeadsMatchType;
    leads_contact_list?: LeadsContactInfoStruct[];
}
