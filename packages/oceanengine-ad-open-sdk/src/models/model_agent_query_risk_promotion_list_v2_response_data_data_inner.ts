// 由 oceanengine/ad_open_sdk_go models/model_agent_query_risk_promotion_list_v2_response_data_data_inner.go 生成
// 不要手动编辑。

import type { AgentQueryRiskPromotionListV2DataDataBusinessType, AgentQueryRiskPromotionListV2DataDataFinalOperatorTag, AgentQueryRiskPromotionListV2DataDataLocalAdStatus, AgentQueryRiskPromotionListV2DataDataPromotionStatus, AgentQueryRiskPromotionListV2DataDataPromotionStatusNew, AgentQueryRiskPromotionListV2DataDataQianchuanAdStatus, AgentQueryRiskPromotionListV2ResponseDataDataInnerMaterialListInner } from "../models/index";

export interface AgentQueryRiskPromotionListV2ResponseDataDataInner {
  advertiser_id?: number | string;
  advertiser_name?: string;
  agent_company_id?: number | string;
  agent_company_name?: string;
  agent_id?: number | string;
  agent_name?: string;
  business_type?: AgentQueryRiskPromotionListV2DataDataBusinessType;
  collaborator_ids?: (number | string)[];
  collaborator_names?: string[];
  company_id?: number | string;
  company_name?: string;
  final_operator_tag?: AgentQueryRiskPromotionListV2DataDataFinalOperatorTag;
  first_agent_company_id?: number | string;
  first_agent_company_name?: string;
  id?: number | string;
  local_ad_status?: AgentQueryRiskPromotionListV2DataDataLocalAdStatus;
  material_list?: AgentQueryRiskPromotionListV2ResponseDataDataInnerMaterialListInner[];
  optimizer_id?: number | string;
  optimizer_name?: string;
  promotion_id?: number | string;
  promotion_name?: string;
  promotion_status?: AgentQueryRiskPromotionListV2DataDataPromotionStatus;
  promotion_status_new?: AgentQueryRiskPromotionListV2DataDataPromotionStatusNew;
  qianchuan_ad_status?: AgentQueryRiskPromotionListV2DataDataQianchuanAdStatus;
  send_time?: string;
}

