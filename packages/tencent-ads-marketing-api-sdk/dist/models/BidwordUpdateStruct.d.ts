import type { BidMode, BidwordLandingPage, BidwordMatchType, BidwordPauseType, BidwordPriceUpdateType, UseGroupPriceType } from "../models";
export interface BidwordUpdateStruct {
    bidword_id?: number | string;
    bid_price?: number;
    bid_mode?: BidMode;
    use_group_price?: UseGroupPriceType;
    price_update_type?: BidwordPriceUpdateType;
    raise_price?: number;
    match_type?: BidwordMatchType;
    configured_status?: BidwordPauseType;
    dynamic_creative_id?: number | string;
    pc_landing_page_info?: BidwordLandingPage;
    mobile_landing_page_info?: BidwordLandingPage;
}
