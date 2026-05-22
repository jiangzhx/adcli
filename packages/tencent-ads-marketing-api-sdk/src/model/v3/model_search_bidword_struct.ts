// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_search_bidword_struct.go
// Do not edit manually.

import type { BidwordLandingPage, BidwordMatchType, BidwordPauseType, UseGroupPriceType } from "../v3/index";

export interface SearchBidwordStruct {
  adgroup_id?: number | string;
  bidword?: string;
  bid_price?: number;
  use_group_price?: UseGroupPriceType;
  match_type?: BidwordMatchType;
  configured_status?: BidwordPauseType;
  dynamic_creative_id?: number | string;
  pc_landing_page_info?: BidwordLandingPage;
  mobile_landing_page_info?: BidwordLandingPage;
}

