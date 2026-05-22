import type { BidwordLandingPage, BidwordMatchType, BidwordPauseType, UseGroupPriceType } from "../models";
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
