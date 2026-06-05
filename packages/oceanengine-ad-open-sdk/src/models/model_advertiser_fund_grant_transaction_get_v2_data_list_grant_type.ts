// 由 oceanengine/ad_open_sdk_go models/model_advertiser_fund_grant_transaction_get_v2_data_list_grant_type.go 生成
// 不要手动编辑。

export const AdvertiserFundGrantTransactionGetV2DataListGrantType = {
  UNKNOWN: "unknown",
  ACTIVITY: "activity",
  REFUND: "refund",
  INTERNAL_AD: "internal_ad",
  RETURN_GOODS: "return_goods",
  EXCHANGE: "exchange",
  SUPPLEMENT: "supplement",
  SUBSIDIARY: "subsidiary",
} as const;

export type AdvertiserFundGrantTransactionGetV2DataListGrantType = typeof AdvertiserFundGrantTransactionGetV2DataListGrantType[keyof typeof AdvertiserFundGrantTransactionGetV2DataListGrantType];

