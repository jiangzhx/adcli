// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AgentAdvBiddingListQueryV2FilteringAccountStatus, AgentAdvBiddingListQueryV2FilteringActive } from "../models";

export interface AgentAdvBiddingListQueryV2Filtering {
  account_status?: AgentAdvBiddingListQueryV2FilteringAccountStatus;
  active?: AgentAdvBiddingListQueryV2FilteringActive;
  advertiser_ids?: number | string[];
  company_name?: string;
  first_industry?: string;
  second_industry?: string;
}

