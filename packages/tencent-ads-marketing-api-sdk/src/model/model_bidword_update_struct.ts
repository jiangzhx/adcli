// Generated from tencentad/marketing-api-go-sdk pkg/model/model_bidword_update_struct.go
// Do not edit manually.

import type { BidMode, BidwordLandingPage, BidwordMatchType, BidwordPauseType, BidwordPriceUpdateType, KeywordLandingPageInfo, UseGroupPriceType } from "../model/index";

export interface BidwordUpdateStruct {
  bidword_id?: number | string;
  bid_price?: number;
  bid_mode?: BidMode;
  use_group_price?: UseGroupPriceType;
  price_update_type?: BidwordPriceUpdateType;
  raise_price?: number;
  match_type?: BidwordMatchType;
  configured_status?: BidwordPauseType;
  pc_landing_page_info?: KeywordLandingPageInfo[];
  mobile_landing_page_info?: KeywordLandingPageInfo[];
  dynamic_creative_id?: number | string;
  pc_bidword_landing_page?: BidwordLandingPage;
  mobile_bidword_landing_page?: BidwordLandingPage;
}

