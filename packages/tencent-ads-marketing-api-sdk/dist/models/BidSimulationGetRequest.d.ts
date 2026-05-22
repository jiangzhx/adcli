export interface BidSimulationGetRequest {
    account_id?: number | string;
    req_type?: number;
    optimization_goal_level?: number;
    adgroup_id?: number | string;
    bid_list?: number[];
}
