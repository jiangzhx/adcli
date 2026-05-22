import type { LeadsStatusInfoStruct } from "../model/index";
export interface LeadCluesUpdateRequest {
    account_id?: number | string;
    leads?: LeadsStatusInfoStruct[];
}
