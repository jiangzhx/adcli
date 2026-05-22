// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AgentAdvBiddingListQueryV2DataDataAccountStatus } from "../models";

export interface AgentAdvBiddingListQueryV2ResponseDataDataInner {
  account_status?: AgentAdvBiddingListQueryV2DataDataAccountStatus;
  advertiser_id?: number;
  advertiser_name?: string;
  agent_id?: number;
  agent_name?: string;
  agent_trans_amount?: number;
  agent_trans_num?: number;
  cash_cost?: number;
  company_id?: number;
  company_name?: string;
  first_industry_id?: number;
  first_industry_name?: string;
  grant_balance?: number;
  grant_cost?: number;
  non_grant_balance_valid?: number;
  register_time?: string;
  roi2_cost?: number;
  second_industry_id?: number;
  second_industry_name?: string;
  stat_cost?: number;
  today_dth_cost?: number;
  today_dth_roi2_cost?: number;
  today_dth_roi2_cost_diff?: number;
  today_yes_dth_cost_diff?: number;
  total_balance?: number;
  total_balance_valid?: number;
  yes_cash_cost?: number;
  yes_cost?: number;
  yes_dth_cost?: number;
  yes_dth_roi2_cost?: number;
  yes_grant_cost?: number;
  yes_roi2_cash_cost?: number;
  yes_roi2_cost?: number;
  yes_roi2_grant_cost?: number;
}

