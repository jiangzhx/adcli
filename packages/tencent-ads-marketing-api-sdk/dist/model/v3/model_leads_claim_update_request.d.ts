import type { LeadsClaimInfoStruct } from "../v3/index";
export interface LeadsClaimUpdateRequest {
    account_id?: number | string;
    leads_claim_list?: LeadsClaimInfoStruct[];
}
