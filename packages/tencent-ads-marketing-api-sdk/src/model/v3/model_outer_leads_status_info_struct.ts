// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_outer_leads_status_info_struct.go
// Do not edit manually.

import type { CustomizedTagsStruct } from "../v3/index";

export interface OuterLeadsStatusInfoStruct {
  outer_leads_id?: string;
  leads_id?: number | string;
  leads_tel?: string;
  leads_qq?: number;
  leads_wechat?: string;
  click_id?: string;
  leads_convert_type?: string;
  leads_ineffect_reason?: string;
  outer_leads_convert_type?: string;
  outer_leads_ineffect_reason?: string;
  customized_tags?: CustomizedTagsStruct[];
}

