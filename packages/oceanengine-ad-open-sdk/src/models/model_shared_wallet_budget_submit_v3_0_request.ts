// Generated from oceanengine/ad_open_sdk_go models/model_shared_wallet_budget_submit_v3_0_request.go
// Do not edit manually.

import type { SharedWalletBudgetSubmitV30AccountType, SharedWalletBudgetSubmitV30EffectiveMode, SharedWalletBudgetSubmitV30RequestBudget } from "../models/index";

export interface SharedWalletBudgetSubmitV30Request {
  account_id: number | string;
  account_type: SharedWalletBudgetSubmitV30AccountType;
  budget: SharedWalletBudgetSubmitV30RequestBudget;
  effective_mode: SharedWalletBudgetSubmitV30EffectiveMode;
  sub_wallet_id: number | string;
}

