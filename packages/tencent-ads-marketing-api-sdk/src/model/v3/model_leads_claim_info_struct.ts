// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_leads_claim_info_struct.go
// Do not edit manually.

import type { LeadsUserType } from "../v3/index";

export interface LeadsClaimInfoStruct {
  outer_leads_id?: string;
  leads_user_type?: LeadsUserType;
  leads_user_wechat_appid?: string;
  leads_user_id?: string;
  campaign_id?: number | string;
  adgroup_id?: string;
  wechat_agency_id?: string;
}

