// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_uni_promotion_list_v1_0_filtering.go
// Do not edit manually.

import type { QianchuanUniPromotionListV10FilteringHavingCost, QianchuanUniPromotionListV10FilteringSearchKeywordType, QianchuanUniPromotionListV10FilteringSmartBidType, QianchuanUniPromotionListV10FilteringStatus } from "../models/index";

export interface QianchuanUniPromotionListV10Filtering {
  create_end_date?: string;
  create_start_date?: string;
  having_cost?: QianchuanUniPromotionListV10FilteringHavingCost;
  search_keyword?: string;
  search_keyword_type?: QianchuanUniPromotionListV10FilteringSearchKeywordType;
  smart_bid_type?: QianchuanUniPromotionListV10FilteringSmartBidType;
  status?: QianchuanUniPromotionListV10FilteringStatus;
}

