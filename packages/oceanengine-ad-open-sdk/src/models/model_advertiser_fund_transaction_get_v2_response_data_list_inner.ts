// 由 oceanengine/ad_open_sdk_go models/model_advertiser_fund_transaction_get_v2_response_data_list_inner.go 生成
// 不要手动编辑。

import type { AdvertiserFundTransactionGetV2DataListTransactionType } from "../models/index";

export interface AdvertiserFundTransactionGetV2ResponseDataListInner {
  advertiser_id?: number | string;
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

