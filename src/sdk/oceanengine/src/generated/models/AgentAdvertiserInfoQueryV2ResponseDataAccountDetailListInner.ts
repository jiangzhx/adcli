// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { AgentAdvertiserInfoQueryV2DataAccountDetailListAdvertiserStatus, AgentAdvertiserInfoQueryV2DataAccountDetailListSelfOperationTag, AgentAdvertiserInfoQueryV2ResponseDataAccountDetailListInnerBrandCollaboratorsInner, AgentAdvertiserInfoQueryV2ResponseDataAccountDetailListInnerCollaboratorsInner } from "../models";

export interface AgentAdvertiserInfoQueryV2ResponseDataAccountDetailListInner {
  adv_company_id?: number;
  adv_company_name?: string;
  advertiser_id?: number;
  advertiser_name?: string;
  advertiser_status?: AgentAdvertiserInfoQueryV2DataAccountDetailListAdvertiserStatus;
  auth_expire_date?: string;
  bind_time?: string;
  brand_collaborators?: AgentAdvertiserInfoQueryV2ResponseDataAccountDetailListInnerBrandCollaboratorsInner[];
  brand_optimizer_id?: number;
  brand_optimizer_name?: string;
  collaborators?: AgentAdvertiserInfoQueryV2ResponseDataAccountDetailListInnerCollaboratorsInner[];
  contact_name?: string;
  create_time?: string;
  customer_sale_name?: string;
  first_agent_company_id?: number;
  first_agent_company_name?: string;
  first_agent_id?: number;
  first_agent_name?: string;
  first_industry_name?: string;
  optimizer_id?: number;
  optimizer_name?: string;
  sale_id?: number;
  sale_name?: string;
  second_industry_name?: string;
  self_operation_tag?: AgentAdvertiserInfoQueryV2DataAccountDetailListSelfOperationTag;
}

