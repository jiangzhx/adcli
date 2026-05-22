// Generated from oceanengine/ad_open_sdk_go models/model_budget_group_list_v3_0_filtering.go
// Do not edit manually.

import type { BudgetGroupListV30FilteringAdType, BudgetGroupListV30FilteringBudgetGroupStatusFirst, BudgetGroupListV30FilteringBudgetGroupStatusSecond, BudgetGroupListV30FilteringDeliveryType, BudgetGroupListV30FilteringStatisticsTime } from "../models/index";

export interface BudgetGroupListV30Filtering {
  ad_type?: BudgetGroupListV30FilteringAdType;
  budget_group_id_list?: number[];
  budget_group_keyword?: string;
  budget_group_status_first?: BudgetGroupListV30FilteringBudgetGroupStatusFirst;
  budget_group_status_second?: BudgetGroupListV30FilteringBudgetGroupStatusSecond;
  delivery_type?: BudgetGroupListV30FilteringDeliveryType;
  statistics_time?: BudgetGroupListV30FilteringStatisticsTime;
}

