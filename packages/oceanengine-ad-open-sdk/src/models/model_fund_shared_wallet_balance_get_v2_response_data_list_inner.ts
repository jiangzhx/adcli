// 由 oceanengine/ad_open_sdk_go models/model_fund_shared_wallet_balance_get_v2_response_data_list_inner.go 生成
// 不要手动编辑。

import type { FundSharedWalletBalanceGetV2ResponseDataListInnerBalanceDetailInner } from "../models/index";

export interface FundSharedWalletBalanceGetV2ResponseDataListInner {
  advertiser_id?: number | string;
  balance_detail?: FundSharedWalletBalanceGetV2ResponseDataListInnerBalanceDetailInner[];
  status?: string;
  status_message?: string;
}

