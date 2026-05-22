import type { BidwordMatchType, BidwordPauseType } from "../model/index";
export interface BidwordRespStruct {
    index?: number;
    bidword_id?: number | string;
    bidword?: string;
    bid_price?: number;
    match_type?: BidwordMatchType;
    configured_status?: BidwordPauseType;
    error_msg?: string;
    approval_status?: number;
    dynamic_creative_id?: number | string;
}
