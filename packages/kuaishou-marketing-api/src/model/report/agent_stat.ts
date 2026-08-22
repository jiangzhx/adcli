// Generated from github.com/bububa/kwai-marketing-api/model/report/agent_stat.go
// Do not edit manually.

import type { KuaishouId } from "../types";

export interface AgentStat {
  date_time?: string;
  account_id?: KuaishouId;
  user_id?: KuaishouId;
  account_name?: string;
  total_charged_in_yuan?: number;
  total_balance_in_yuan?: number;
  real_charged_in_yuan?: number;
  total_real_recharged_in_yuan?: number;
  contract_rebate_real_recharged_in_yuan?: number;
  direct_rebate_real_charged_in_yuan?: number;
  credit_real_charged_in_yuan?: number;
  charge_day_on_day_percent?: string;
  ad_photo_impression?: number;
  ad_photo_click?: number;
  ad_item_click?: number;
  photo_click_ratio?: string;
  item_click_ratio?: string;
  charged_campaign_count?: number;
  product_name?: string;
  corporation_name?: string;
  first_cost_day?: number;
  industry?: string;
  second_industry?: string;
}
