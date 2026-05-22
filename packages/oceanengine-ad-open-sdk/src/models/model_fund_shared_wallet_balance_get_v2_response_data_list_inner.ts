// Generated from oceanengine/ad_open_sdk_go models/model_fund_shared_wallet_balance_get_v2_response_data_list_inner.go
// Do not edit manually.

import type { FundSharedWalletBalanceGetV2ResponseDataListInnerBalanceDetailInner } from "../models/index";

export interface FundSharedWalletBalanceGetV2ResponseDataListInner {
  advertiser_id?: number | string;
  balance_detail?: FundSharedWalletBalanceGetV2ResponseDataListInnerBalanceDetailInner[];
  status?: string;
  status_message?: string;
}

