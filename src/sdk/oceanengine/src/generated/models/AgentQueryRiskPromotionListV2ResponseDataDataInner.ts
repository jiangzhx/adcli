// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { AgentQueryRiskPromotionListV2DataDataBusinessType, AgentQueryRiskPromotionListV2DataDataFinalOperatorTag, AgentQueryRiskPromotionListV2DataDataPromotionStatus, AgentQueryRiskPromotionListV2ResponseDataDataInnerMaterialListInner } from "../models";

export interface AgentQueryRiskPromotionListV2ResponseDataDataInner {
  advertiser_id?: number;
  advertiser_name?: string;
  agent_company_id?: number;
  agent_company_name?: string;
  agent_id?: number;
  agent_name?: string;
  business_type?: AgentQueryRiskPromotionListV2DataDataBusinessType;
  collaborator_ids?: number[];
  collaborator_names?: string[];
  company_id?: number;
  company_name?: string;
  final_operator_tag?: AgentQueryRiskPromotionListV2DataDataFinalOperatorTag;
  first_agent_company_id?: number;
  first_agent_company_name?: string;
  id?: number;
  material_list?: AgentQueryRiskPromotionListV2ResponseDataDataInnerMaterialListInner[];
  optimizer_id?: number;
  optimizer_name?: string;
  promotion_id?: number;
  promotion_name?: string;
  promotion_status?: AgentQueryRiskPromotionListV2DataDataPromotionStatus;
  send_time?: string;
}

