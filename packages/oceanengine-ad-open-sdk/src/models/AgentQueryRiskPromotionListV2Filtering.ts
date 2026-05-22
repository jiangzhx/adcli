// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AgentQueryRiskPromotionListV2FilteringFinalOperatorTag, AgentQueryRiskPromotionListV2FilteringPromotionStatus } from "../models";

export interface AgentQueryRiskPromotionListV2Filtering {
  advertiser_ids?: number | string[];
  advertiser_name?: string;
  final_operator_tag?: AgentQueryRiskPromotionListV2FilteringFinalOperatorTag;
  illegal_material_ids?: number | string[];
  promotion_ids?: number | string[];
  promotion_name?: string;
  promotion_status?: AgentQueryRiskPromotionListV2FilteringPromotionStatus;
}

