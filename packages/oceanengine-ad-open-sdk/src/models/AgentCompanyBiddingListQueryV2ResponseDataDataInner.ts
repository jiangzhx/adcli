// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AgentCompanyBiddingListQueryV2ResponseDataDataInnerCollaboratorsInner, AgentCompanyBiddingListQueryV2ResponseDataDataInnerOptimizerDepartmentsInner, AgentCompanyBiddingListQueryV2ResponseDataDataInnerOptimizersInner } from "../models";

export interface AgentCompanyBiddingListQueryV2ResponseDataDataInner {
  collaborators?: AgentCompanyBiddingListQueryV2ResponseDataDataInnerCollaboratorsInner[];
  company_all_audit_adv_cnt?: number;
  company_audit_adv_cnt?: number;
  company_balance?: number;
  company_grant_balance?: number;
  company_id?: number | string;
  company_last_renew_date?: string;
  company_name?: string;
  company_non_grant_balance?: number;
  company_renew_amount?: number;
  company_renew_num?: number;
  company_trans_amount?: number;
  company_trans_num?: number;
  company_valid_balance?: number;
  optimizer_departments?: AgentCompanyBiddingListQueryV2ResponseDataDataInnerOptimizerDepartmentsInner[];
  optimizers?: AgentCompanyBiddingListQueryV2ResponseDataDataInnerOptimizersInner[];
  roi2_cash_cost?: number;
  roi2_cost?: number;
  roi2_grant_cost?: number;
  standard_cash_cost?: number;
  standard_cost?: number;
  standard_grant_cost?: number;
  today_dth_roi2_cost?: number;
  today_dth_roi2_cost_diff?: string;
  today_dth_standard_cost?: number;
  today_dth_standard_cost_diff?: number;
  yes_dth_roi2_cost?: string;
  yes_dth_standard_cost?: number;
  yes_roi2_cash_cost?: string;
  yes_roi2_cost?: number;
  yes_roi2_grant_cost?: string;
  yes_standard_cash_cost?: number;
  yes_standard_cost?: number;
  yes_standard_grant_cost?: number;
}

