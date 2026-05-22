// Generated from oceanengine/ad_open_sdk_go models/model_budget_group_list_v3_0_response_data_budget_groups_inner.go
// Do not edit manually.

import type { BudgetGroupListV30DataBudgetGroupsAdType, BudgetGroupListV30DataBudgetGroupsBudgetGroupStatusFirst, BudgetGroupListV30DataBudgetGroupsBudgetGroupStatusSecond, BudgetGroupListV30DataBudgetGroupsDeliveryType } from "../models/index";

export interface BudgetGroupListV30ResponseDataBudgetGroupsInner {
  ad_type?: BudgetGroupListV30DataBudgetGroupsAdType;
  budget_group_budget?: number;
  budget_group_id?: number | string;
  budget_group_name?: string;
  budget_group_status_first?: BudgetGroupListV30DataBudgetGroupsBudgetGroupStatusFirst;
  budget_group_status_second?: BudgetGroupListV30DataBudgetGroupsBudgetGroupStatusSecond[];
  cost?: number;
  delivery_type?: BudgetGroupListV30DataBudgetGroupsDeliveryType;
  num_projects?: number;
}

