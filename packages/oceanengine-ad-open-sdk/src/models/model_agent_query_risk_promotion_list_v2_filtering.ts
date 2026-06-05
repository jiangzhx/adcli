// 由 oceanengine/ad_open_sdk_go models/model_agent_query_risk_promotion_list_v2_filtering.go 生成
// 不要手动编辑。

import type { AgentQueryRiskPromotionListV2FilteringFinalOperatorTag, AgentQueryRiskPromotionListV2FilteringFinalOperatorTagList, AgentQueryRiskPromotionListV2FilteringLocalAdStatusList, AgentQueryRiskPromotionListV2FilteringPromotionStatus, AgentQueryRiskPromotionListV2FilteringPromotionStatusList, AgentQueryRiskPromotionListV2FilteringQianchuanAdStatusList } from "../models/index";

export interface AgentQueryRiskPromotionListV2Filtering {
  advertiser_ids?: (number | string)[];
  advertiser_name?: string;
  company_ids?: (number | string)[];
  company_name?: string;
  final_operator_tag?: AgentQueryRiskPromotionListV2FilteringFinalOperatorTag;
  final_operator_tag_list?: AgentQueryRiskPromotionListV2FilteringFinalOperatorTagList[];
  illegal_material_ids?: (number | string)[];
  local_ad_status_list?: AgentQueryRiskPromotionListV2FilteringLocalAdStatusList[];
  promotion_ids?: (number | string)[];
  promotion_name?: string;
  promotion_status?: AgentQueryRiskPromotionListV2FilteringPromotionStatus;
  promotion_status_list?: AgentQueryRiskPromotionListV2FilteringPromotionStatusList[];
  qianchuan_ad_status_list?: AgentQueryRiskPromotionListV2FilteringQianchuanAdStatusList[];
}

