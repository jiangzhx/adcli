// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_uni_aweme_suggest_budget_v1_0_response_data.go
// Do not edit manually.

import type { QianchuanUniAwemeSuggestBudgetV10ResponseDataEstimateTransCostListInner } from "../models/index";

export interface QianchuanUniAwemeSuggestBudgetV10ResponseData {
  budget?: number;
  budget_danger?: number;
  budget_max?: number;
  budget_min?: number;
  estimate_trans_cost_list?: QianchuanUniAwemeSuggestBudgetV10ResponseDataEstimateTransCostListInner[];
  is_update?: boolean;
  last_update_time?: string;
  suggested_budget_list?: number[];
}

