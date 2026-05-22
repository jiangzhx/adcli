// Generated from oceanengine/ad_open_sdk_go models/model_agent_query_risk_promotion_list_v2_response_data_data_inner_material_list_inner.go
// Do not edit manually.

import type { AgentQueryRiskPromotionListV2DataDataMaterialListType, AgentQueryRiskPromotionListV2ResponseDataDataInnerMaterialListInnerRefPromotionListInner } from "../models/index";

export interface AgentQueryRiskPromotionListV2ResponseDataDataInnerMaterialListInner {
  id?: number | string;
  ref_promotion_ids?: (number | string)[];
  ref_promotion_list?: AgentQueryRiskPromotionListV2ResponseDataDataInnerMaterialListInnerRefPromotionListInner[];
  risk_content?: string[];
  type?: AgentQueryRiskPromotionListV2DataDataMaterialListType;
}

