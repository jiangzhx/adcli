import type { OptimizeStatus } from "../models";
export interface OptimizeSubStatusStruct {
    targeting?: OptimizeStatus;
    targeting_expand?: OptimizeStatus;
    targeting_locard?: OptimizeStatus;
    bid?: OptimizeStatus;
    bid_strategy?: OptimizeStatus;
    bid_amount?: OptimizeStatus;
    budget?: OptimizeStatus;
    daily_budget?: OptimizeStatus;
    account_balance?: OptimizeStatus;
    targeting_status_desc?: string;
    targeting_expand_status_desc?: string;
    targeting_locard_status_desc?: string;
    bid_status_desc?: string;
    bid_strategy_status_desc?: string;
    bid_amount_status_desc?: string;
    budget_status_desc?: string;
    daily_budget_status_desc?: string;
    account_balance_status_desc?: string;
}
