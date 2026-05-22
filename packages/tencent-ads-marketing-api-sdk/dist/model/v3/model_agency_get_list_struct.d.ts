import type { CustomerSystemStatus } from "../v3/index";
export interface AgencyGetListStruct {
    account_id?: number | string;
    corporation_name?: string;
    system_status?: CustomerSystemStatus;
    reject_message?: string;
    parent_agency_id?: number | string;
    memo?: string;
}
