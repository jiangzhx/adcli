// Generated from tencentad/marketing-api-go-sdk pkg/model/model_outer_clues_action_type_report_request.go
// Do not edit manually.

import type { LeadsActionTypeReportListStruct, LeadsMatchType } from "../model/index";

export interface OuterCluesActionTypeReportRequest {
  account_id?: number | string;
  match_type?: LeadsMatchType;
  leads_action_type_report_list?: LeadsActionTypeReportListStruct[];
}

