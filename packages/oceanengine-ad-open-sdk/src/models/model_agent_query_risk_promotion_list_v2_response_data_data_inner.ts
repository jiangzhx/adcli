// Generated from oceanengine/ad_open_sdk_go models/model_agent_query_risk_promotion_list_v2_response_data_data_inner.go
// Do not edit manually.

import type { AgentQueryRiskPromotionListV2DataDataBusinessType, AgentQueryRiskPromotionListV2DataDataFinalOperatorTag, AgentQueryRiskPromotionListV2DataDataPromotionStatus, AgentQueryRiskPromotionListV2ResponseDataDataInnerMaterialListInner } from "../models/index";

export interface AgentQueryRiskPromotionListV2ResponseDataDataInner {
  advertiser_id?: number | string;
  advertiser_name?: string;
  agent_company_id?: number | string;
  agent_company_name?: string;
  agent_id?: number | string;
  agent_name?: string;
  business_type?: AgentQueryRiskPromotionListV2DataDataBusinessType;
  collaborator_ids?: number | string[];
  collaborator_names?: string[];
  company_id?: number | string;
  company_name?: string;
  final_operator_tag?: AgentQueryRiskPromotionListV2DataDataFinalOperatorTag;
  first_agent_company_id?: number | string;
  first_agent_company_name?: string;
  id?: number | string;
  material_list?: AgentQueryRiskPromotionListV2ResponseDataDataInnerMaterialListInner[];
  optimizer_id?: number | string;
  optimizer_name?: string;
  promotion_id?: number | string;
  promotion_name?: string;
  promotion_status?: AgentQueryRiskPromotionListV2DataDataPromotionStatus;
  send_time?: string;
}

