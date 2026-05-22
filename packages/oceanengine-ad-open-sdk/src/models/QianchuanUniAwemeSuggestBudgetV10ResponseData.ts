// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanUniAwemeSuggestBudgetV10ResponseDataEstimateTransCostListInner } from "../models";

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

