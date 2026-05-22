// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_leads_action_type_report_add_request.go
// Do not edit manually.

import type { LeadsActionTypeReportListStruct, LeadsMatchType } from "../v3/index";

export interface LeadsActionTypeReportAddRequest {
  account_id?: number | string;
  match_type?: LeadsMatchType;
  leads_action_type_report_list?: LeadsActionTypeReportListStruct[];
}

