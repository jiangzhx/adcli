export interface OptBudgetStruct {
    raise_day_budget_flag?: boolean;
    current_adgroup_day_budget?: number;
    current_campaign_day_budget?: number;
    current_account_day_budget?: number;
    adgroup_cost_daily?: number;
    campaign_cost_daily?: number;
    account_cost_daily?: number;
    adgroup_balance?: number;
    campaign_balance?: number;
    account_balance?: number;
    optimize_adgroup_day_budget_flag?: boolean;
    optimize_campaign_day_budget_flag?: boolean;
    optimize_account_day_budget_flag?: boolean;
    optimize_adgroup_day_budget?: number;
    optimize_campaign_day_budget?: number;
    optimize_account_day_budget?: number;
    raise_account_balance_flag?: boolean;
    recommend_recharge?: number;
}
