// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { AdvertiserFundGrantTransactionGetV2DataListGrantType, AdvertiserFundGrantTransactionGetV2DataListTransactionType } from "../models";

export interface AdvertiserFundGrantTransactionGetV2ResponseDataListInner {
  advertiser_id?: number;
  amount?: number;
  create_time?: string;
  grant_type?: AdvertiserFundGrantTransactionGetV2DataListGrantType;
  transaction_type?: AdvertiserFundGrantTransactionGetV2DataListTransactionType;
  uniq_id?: string;
}

