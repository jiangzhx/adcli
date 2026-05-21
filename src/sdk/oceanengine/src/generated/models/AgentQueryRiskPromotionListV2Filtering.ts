// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { AgentQueryRiskPromotionListV2FilteringFinalOperatorTag, AgentQueryRiskPromotionListV2FilteringPromotionStatus } from "../models";

export interface AgentQueryRiskPromotionListV2Filtering {
  advertiser_ids?: number[];
  advertiser_name?: string;
  final_operator_tag?: AgentQueryRiskPromotionListV2FilteringFinalOperatorTag;
  illegal_material_ids?: number[];
  promotion_ids?: number[];
  promotion_name?: string;
  promotion_status?: AgentQueryRiskPromotionListV2FilteringPromotionStatus;
}

