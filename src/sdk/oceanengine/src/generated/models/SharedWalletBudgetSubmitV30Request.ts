// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { SharedWalletBudgetSubmitV30AccountType, SharedWalletBudgetSubmitV30EffectiveMode, SharedWalletBudgetSubmitV30RequestBudget } from "../models";

export interface SharedWalletBudgetSubmitV30Request {
  account_id: number;
  account_type: SharedWalletBudgetSubmitV30AccountType;
  budget: SharedWalletBudgetSubmitV30RequestBudget;
  effective_mode: SharedWalletBudgetSubmitV30EffectiveMode;
  sub_wallet_id: number;
}

