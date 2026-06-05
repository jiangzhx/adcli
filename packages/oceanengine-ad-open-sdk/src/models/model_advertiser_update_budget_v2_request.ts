// 由 oceanengine/ad_open_sdk_go models/model_advertiser_update_budget_v2_request.go 生成
// 不要手动编辑。

import type { AdvertiserUpdateBudgetV2BudgetMode } from "../models/index";

export interface AdvertiserUpdateBudgetV2Request {
  advertiser_id: number | string;
  budget?: number;
  budget_mode: AdvertiserUpdateBudgetV2BudgetMode;
}

