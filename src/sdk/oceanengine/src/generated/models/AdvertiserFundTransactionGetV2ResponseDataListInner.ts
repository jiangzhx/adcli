// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { AdvertiserFundTransactionGetV2DataListTransactionType } from "../models";

export interface AdvertiserFundTransactionGetV2ResponseDataListInner {
  advertiser_id?: number;
  amount?: number;
  cash?: number;
  create_time?: string;
  dealbase?: number;
  frozen?: number;
  grant?: number;
  payee?: number;
  remitter?: number;
  return_goods?: number;
  transaction_seq?: number;
  transaction_type?: AdvertiserFundTransactionGetV2DataListTransactionType;
}

