import type { LeadCluesLeadsConvertType, LeadCluesLeadsIneffectReason, LeadCluesLeadsIntentionScore } from "../model/index";
export interface LeadsStatusInfoStruct {
    leads_id?: number | string;
    leads_convert_type?: LeadCluesLeadsConvertType;
    leads_ineffect_reason?: LeadCluesLeadsIneffectReason;
    leads_intention_score?: LeadCluesLeadsIntentionScore;
}
