// Generated from oceanengine/ad_open_sdk_go models/model_shared_wallet_transaction_detail_get_v3_0_response_data_results_inner.go
// Do not edit manually.

import type { SharedWalletTransactionDetailGetV30DataResultsBizType, SharedWalletTransactionDetailGetV30DataResultsPayeeType, SharedWalletTransactionDetailGetV30DataResultsRemitterType } from "../models/index";

export interface SharedWalletTransactionDetailGetV30ResponseDataResultsInner {
  amount?: number;
  biz_type?: SharedWalletTransactionDetailGetV30DataResultsBizType;
  business_time?: string;
  credit_amount?: number;
  payee?: number;
  payee_name?: string;
  payee_type?: SharedWalletTransactionDetailGetV30DataResultsPayeeType;
  preloan_amount?: number;
  prepay_amount?: number;
  remitter?: number;
  remitter_name?: string;
  remitter_type?: SharedWalletTransactionDetailGetV30DataResultsRemitterType;
  transaction_seq?: number;
}

