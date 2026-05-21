// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { AgentQueryRiskPromotionListV2DataDataMaterialListType, AgentQueryRiskPromotionListV2ResponseDataDataInnerMaterialListInnerRefPromotionListInner } from "../models";

export interface AgentQueryRiskPromotionListV2ResponseDataDataInnerMaterialListInner {
  id?: number;
  ref_promotion_ids?: number[];
  ref_promotion_list?: AgentQueryRiskPromotionListV2ResponseDataDataInnerMaterialListInnerRefPromotionListInner[];
  risk_content?: string[];
  type?: AgentQueryRiskPromotionListV2DataDataMaterialListType;
}

