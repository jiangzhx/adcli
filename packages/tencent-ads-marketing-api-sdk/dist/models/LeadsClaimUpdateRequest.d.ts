import type { LeadsClaimInfoStruct } from "../models";
export interface LeadsClaimUpdateRequest {
    account_id?: number | string;
    leads_claim_list?: LeadsClaimInfoStruct[];
}
