import type { LeadsActionTypeReportListStruct, LeadsMatchType } from "../v3/index";
export interface LeadsActionTypeReportAddRequest {
    account_id?: number | string;
    match_type?: LeadsMatchType;
    leads_action_type_report_list?: LeadsActionTypeReportListStruct[];
}
