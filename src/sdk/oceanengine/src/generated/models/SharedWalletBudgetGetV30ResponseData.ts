// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { SharedWalletBudgetGetV30ResponseDataBudgetInfoValue } from "../models";

export interface SharedWalletBudgetGetV30ResponseData {
  budget_info?: Record<string, SharedWalletBudgetGetV30ResponseDataBudgetInfoValue>;
  budget_lower_limit?: number;
  budget_upper_limit?: number;
  sub_wallet_id?: number;
}

