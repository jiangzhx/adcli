import type { LeadsMatchType, OuterLeadsStatusInfoStruct } from "../v3/index";
export interface LeadsStatusUpdateRequest {
    account_id?: number | string;
    match_type?: LeadsMatchType;
    leads_conversion_status_list?: OuterLeadsStatusInfoStruct[];
}
