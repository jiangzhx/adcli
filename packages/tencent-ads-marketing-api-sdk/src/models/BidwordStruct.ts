// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { BidwordLandingPage, BidwordMatchType, BidwordPauseType, KeywordLandingPageInfo, UseGroupPriceType } from "../models";

export interface BidwordStruct {
  campaign_id?: number | string;
  adgroup_id?: number | string;
  bidword?: string;
  bid_price?: number;
  use_group_price?: UseGroupPriceType;
  match_type?: BidwordMatchType;
  configured_status?: BidwordPauseType;
  pc_landing_page_info?: KeywordLandingPageInfo[];
  mobile_landing_page_info?: KeywordLandingPageInfo[];
  dynamic_creative_id?: number | string;
  pc_bidword_landing_page?: BidwordLandingPage;
  mobile_bidword_landing_page?: BidwordLandingPage;
}

