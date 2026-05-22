// Generated from oceanengine/ad_open_sdk_go models/model_advertiser_fund_grant_transaction_get_v2_response_data_list_inner.go
// Do not edit manually.

import type { AdvertiserFundGrantTransactionGetV2DataListGrantType, AdvertiserFundGrantTransactionGetV2DataListTransactionType } from "../models/index";

export interface AdvertiserFundGrantTransactionGetV2ResponseDataListInner {
  advertiser_id?: number | string;
  amount?: number;
  create_time?: string;
  grant_type?: AdvertiserFundGrantTransactionGetV2DataListGrantType;
  transaction_type?: AdvertiserFundGrantTransactionGetV2DataListTransactionType;
  uniq_id?: string;
}

