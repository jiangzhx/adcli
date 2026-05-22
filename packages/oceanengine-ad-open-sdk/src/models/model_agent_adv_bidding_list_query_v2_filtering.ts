// Generated from oceanengine/ad_open_sdk_go models/model_agent_adv_bidding_list_query_v2_filtering.go
// Do not edit manually.

import type { AgentAdvBiddingListQueryV2FilteringAccountStatus, AgentAdvBiddingListQueryV2FilteringActive } from "../models/index";

export interface AgentAdvBiddingListQueryV2Filtering {
  account_status?: AgentAdvBiddingListQueryV2FilteringAccountStatus;
  active?: AgentAdvBiddingListQueryV2FilteringActive;
  advertiser_ids?: (number | string)[];
  company_name?: string;
  first_industry?: string;
  second_industry?: string;
}

