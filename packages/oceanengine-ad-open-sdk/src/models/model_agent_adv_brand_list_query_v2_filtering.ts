// Generated from oceanengine/ad_open_sdk_go models/model_agent_adv_brand_list_query_v2_filtering.go
// Do not edit manually.

import type { AgentAdvBrandListQueryV2FilteringAccountStatus } from "../models/index";

export interface AgentAdvBrandListQueryV2Filtering {
  account_status?: AgentAdvBrandListQueryV2FilteringAccountStatus;
  advertiser_ids?: number | string[];
  company_name?: string;
  first_industry?: string;
  second_industry?: string;
}

