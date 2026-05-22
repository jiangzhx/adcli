// Generated from oceanengine/ad_open_sdk_go models/model_agent_query_risk_promotion_list_v2_filtering.go
// Do not edit manually.

import type { AgentQueryRiskPromotionListV2FilteringFinalOperatorTag, AgentQueryRiskPromotionListV2FilteringPromotionStatus } from "../models/index";

export interface AgentQueryRiskPromotionListV2Filtering {
  advertiser_ids?: (number | string)[];
  advertiser_name?: string;
  final_operator_tag?: AgentQueryRiskPromotionListV2FilteringFinalOperatorTag;
  illegal_material_ids?: (number | string)[];
  promotion_ids?: (number | string)[];
  promotion_name?: string;
  promotion_status?: AgentQueryRiskPromotionListV2FilteringPromotionStatus;
}

