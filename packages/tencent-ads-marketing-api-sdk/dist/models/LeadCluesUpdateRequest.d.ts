import type { LeadsStatusInfoStruct } from "../models";
export interface LeadCluesUpdateRequest {
    account_id?: number | string;
    leads?: LeadsStatusInfoStruct[];
}
