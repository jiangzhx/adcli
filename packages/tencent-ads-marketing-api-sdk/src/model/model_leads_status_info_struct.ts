// Generated from tencentad/marketing-api-go-sdk pkg/model/model_leads_status_info_struct.go
// Do not edit manually.

import type { LeadCluesLeadsConvertType, LeadCluesLeadsIneffectReason, LeadCluesLeadsIntentionScore } from "../model/index";

export interface LeadsStatusInfoStruct {
  leads_id?: number | string;
  leads_convert_type?: LeadCluesLeadsConvertType;
  leads_ineffect_reason?: LeadCluesLeadsIneffectReason;
  leads_intention_score?: LeadCluesLeadsIntentionScore;
}

