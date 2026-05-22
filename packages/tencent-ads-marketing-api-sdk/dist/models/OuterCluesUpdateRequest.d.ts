import type { LeadsMatchType, OuterLeadsStatusInfoStruct } from "../models";
export interface OuterCluesUpdateRequest {
    account_id?: number | string;
    match_type?: LeadsMatchType;
    leads_conversion_status_list?: OuterLeadsStatusInfoStruct[];
}
