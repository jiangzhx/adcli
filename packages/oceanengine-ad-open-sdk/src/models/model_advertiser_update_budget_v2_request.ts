// Generated from oceanengine/ad_open_sdk_go models/model_advertiser_update_budget_v2_request.go
// Do not edit manually.

import type { AdvertiserUpdateBudgetV2BudgetMode } from "../models/index";

export interface AdvertiserUpdateBudgetV2Request {
  advertiser_id: number | string;
  budget?: number;
  budget_mode: AdvertiserUpdateBudgetV2BudgetMode;
}

