// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_leads_add_request.go
// Do not edit manually.

import type { LeadsAddInfoStruct, LeadsMatchType } from "../v3/index";

export interface LeadsAddRequest {
  account_id?: number | string;
  match_type?: LeadsMatchType;
  leads_info_list?: LeadsAddInfoStruct[];
}

