// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_finance_wallet_get_v1_0_response_data.go
// Do not edit manually.

import type { QianchuanFinanceWalletGetV10ResponseDataShareExpiringDetailListInner } from "../models/index";

export interface QianchuanFinanceWalletGetV10ResponseData {
  brand_balance?: number;
  brand_balance_invalid?: number;
  brand_balance_invalid_frozen?: number;
  brand_balance_valid?: number;
  brand_balance_valid_grant?: number;
  brand_balance_valid_non_grant?: number;
  common_valid_grant_balance?: number;
  deduction_coupon_balance?: number;
  deduction_coupon_balance_all?: number;
  deduction_coupon_balance_other?: number;
  deduction_coupon_balance_self?: number;
  default_valid_grant_balance?: number;
  general_balance_invalid?: number;
  general_balance_invalid_frozen?: number;
  general_balance_invalid_order?: number;
  general_balance_valid?: number;
  general_balance_valid_grant_common?: number;
  general_balance_valid_grant_default?: number;
  general_balance_valid_grant_search?: number;
  general_balance_valid_grant_union?: number;
  general_balance_valid_non_grant?: number;
  general_total_balance?: number;
  grant_balance?: number;
  grant_expiring?: number;
  search_valid_grant_balance?: number;
  share_balance?: number;
  share_balance_expiring?: number;
  share_balance_valid?: number;
  share_balance_valid_grant_common?: number;
  share_balance_valid_grant_default?: number;
  share_balance_valid_grant_search?: number;
  share_balance_valid_grant_union?: number;
  share_expiring_detail_list?: QianchuanFinanceWalletGetV10ResponseDataShareExpiringDetailListInner[];
  total_balance_abs?: number;
  union_valid_grant_balance?: number;
}

