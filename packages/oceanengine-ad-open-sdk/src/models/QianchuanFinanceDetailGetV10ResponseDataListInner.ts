// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanFinanceDetailGetV10DataListViewDeliveryType } from "../models";

export interface QianchuanFinanceDetailGetV10ResponseDataListInner {
  cash_balance?: number;
  cash_cost?: number;
  cost?: number;
  coupon_cost?: number;
  date?: string;
  deduction_cost?: number;
  grant_balance?: number;
  grant_cost?: number;
  income?: number;
  qc_aweme_cash_cost?: number;
  qc_aweme_cost?: number;
  qc_aweme_grant_cost?: number;
  share_cost?: number;
  share_wallet_cost?: number;
  total_balance?: number;
  transfer_in?: number;
  transfer_out?: number;
  view_delivery_type?: QianchuanFinanceDetailGetV10DataListViewDeliveryType;
}

