// Generated from tencentad/marketing-api-go-sdk pkg/model/model_outer_clues_update_request.go
// Do not edit manually.

import type { LeadsMatchType, OuterLeadsStatusInfoStruct } from "../model/index";

export interface OuterCluesUpdateRequest {
  account_id?: number | string;
  match_type?: LeadsMatchType;
  leads_conversion_status_list?: OuterLeadsStatusInfoStruct[];
}

