// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_leads_update_request.go
// Do not edit manually.

import type { LeadsMatchType, LeadsUpdateInfoStruct } from "../v3/index";

export interface LeadsUpdateRequest {
  account_id?: number | string;
  match_type?: LeadsMatchType;
  leads_contact_list?: LeadsUpdateInfoStruct[];
}

