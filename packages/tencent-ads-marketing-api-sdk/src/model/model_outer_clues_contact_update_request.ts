// Generated from tencentad/marketing-api-go-sdk pkg/model/model_outer_clues_contact_update_request.go
// Do not edit manually.

import type { LeadsContactInfoStruct, LeadsMatchType } from "../model/index";

export interface OuterCluesContactUpdateRequest {
  account_id?: number | string;
  match_type?: LeadsMatchType;
  leads_contact_list?: LeadsContactInfoStruct[];
}

