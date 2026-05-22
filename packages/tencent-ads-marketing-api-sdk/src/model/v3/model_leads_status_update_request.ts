// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_leads_status_update_request.go
// Do not edit manually.

import type { LeadsMatchType, OuterLeadsStatusInfoStruct } from "../v3/index";

export interface LeadsStatusUpdateRequest {
  account_id?: number | string;
  match_type?: LeadsMatchType;
  leads_conversion_status_list?: OuterLeadsStatusInfoStruct[];
}

