// Generated from oceanengine/ad_open_sdk_go models/model_shared_wallet_transaction_detail_get_v3_0_data_results_biz_type.go
// Do not edit manually.

export const SharedWalletTransactionDetailGetV30DataResultsBizType = {
  ADJUST_DECREASE: "ADJUST_DECREASE",
  ADJUST_FREEZE: "ADJUST_FREEZE",
  ADJUST_INCREASE: "ADJUST_INCREASE",
  CREDIT_RECHARGE: "CREDIT_RECHARGE",
  CREDIT_REFUND: "CREDIT_REFUND",
  INIT: "INIT",
  ORDER_PAY: "ORDER_PAY",
  ORDER_WITHDRAW: "ORDER_WITHDRAW",
  REFUND_FREEZE: "REFUND_FREEZE",
  SHARED_CANCEL_RECHARGE: "SHARED_CANCEL_RECHARGE",
  SHARED_FROZEN_REFUND: "SHARED_FROZEN_REFUND",
  SHARED_RECHARGE: "SHARED_RECHARGE",
  TRANSFER: "TRANSFER",
  TRANSFER_IN: "TRANSFER_IN",
  TRANSFER_OUT: "TRANSFER_OUT",
  RISK_CONTROL_FREEZE: "RISK_CONTROL_FREEZE",
} as const;

export type SharedWalletTransactionDetailGetV30DataResultsBizType = typeof SharedWalletTransactionDetailGetV30DataResultsBizType[keyof typeof SharedWalletTransactionDetailGetV30DataResultsBizType];

