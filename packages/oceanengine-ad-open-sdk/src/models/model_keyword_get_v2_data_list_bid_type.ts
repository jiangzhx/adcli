// 由 oceanengine/ad_open_sdk_go models/model_keyword_get_v2_data_list_bid_type.go 生成
// 不要手动编辑。

export const KeywordGetV2DataListBidType = {
  CUSTOM: "CUSTOM",
  WITH_AD: "WITH_AD",
  SUGGEST: "SUGGEST",
  FEED_TO_SEARCH: "FEED_TO_SEARCH",
  BRAND_AD: "BRAND_AD",
} as const;

export type KeywordGetV2DataListBidType = typeof KeywordGetV2DataListBidType[keyof typeof KeywordGetV2DataListBidType];

