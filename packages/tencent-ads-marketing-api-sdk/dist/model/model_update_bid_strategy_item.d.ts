import type { BidStrategy } from "../model/index";
export interface UpdateBidStrategyItem {
    adgroup_id?: number | string;
    bid_strategy?: BidStrategy;
}
