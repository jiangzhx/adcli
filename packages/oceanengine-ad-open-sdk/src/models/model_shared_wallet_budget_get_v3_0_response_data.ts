// 由 oceanengine/ad_open_sdk_go models/model_shared_wallet_budget_get_v3_0_response_data.go 生成
// 不要手动编辑。

import type { SharedWalletBudgetGetV30ResponseDataBudgetInfoValue } from "../models/index";

export interface SharedWalletBudgetGetV30ResponseData {
  budget_info?: Record<string, SharedWalletBudgetGetV30ResponseDataBudgetInfoValue>;
  budget_lower_limit?: number;
  budget_upper_limit?: number;
  sub_wallet_id?: number | string;
}

