// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_account_budget_update_v1_0_request.go
// Do not edit manually.

import type { QianchuanAccountBudgetUpdateV10BudgetMode } from "../models/index";

export interface QianchuanAccountBudgetUpdateV10Request {
  advertiser_id: number | string;
  budget?: number;
  budget_mode: QianchuanAccountBudgetUpdateV10BudgetMode;
}

