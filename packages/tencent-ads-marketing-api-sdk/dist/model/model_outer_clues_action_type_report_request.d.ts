import type { LeadsActionTypeReportListStruct, LeadsMatchType } from "../model/index";
export interface OuterCluesActionTypeReportRequest {
    account_id?: number | string;
    match_type?: LeadsMatchType;
    leads_action_type_report_list?: LeadsActionTypeReportListStruct[];
}
