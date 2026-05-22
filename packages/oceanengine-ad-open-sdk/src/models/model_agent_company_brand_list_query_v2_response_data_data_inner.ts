// Generated from oceanengine/ad_open_sdk_go models/model_agent_company_brand_list_query_v2_response_data_data_inner.go
// Do not edit manually.

import type { AgentCompanyBrandListQueryV2ResponseDataDataInnerCollaboratorsInner, AgentCompanyBrandListQueryV2ResponseDataDataInnerOptimizerDepartmentsInner, AgentCompanyBrandListQueryV2ResponseDataDataInnerOptimizersInner } from "../models/index";

export interface AgentCompanyBrandListQueryV2ResponseDataDataInner {
  agent_cash_cost?: number;
  agent_grant_cost?: number;
  collaborators?: AgentCompanyBrandListQueryV2ResponseDataDataInnerCollaboratorsInner[];
  company_balance?: number;
  company_grant_balance?: number;
  company_id?: number | string;
  company_name?: string;
  company_non_grant_balance?: number;
  company_valid_balance?: number;
  optimizer_departments?: AgentCompanyBrandListQueryV2ResponseDataDataInnerOptimizerDepartmentsInner[];
  optimizers?: AgentCompanyBrandListQueryV2ResponseDataDataInnerOptimizersInner[];
  stat_cost?: number;
}

