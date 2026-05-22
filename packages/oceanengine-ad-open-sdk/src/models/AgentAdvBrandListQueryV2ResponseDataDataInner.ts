// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AgentAdvBrandListQueryV2DataDataAccountStatus } from "../models";

export interface AgentAdvBrandListQueryV2ResponseDataDataInner {
  account_status?: AgentAdvBrandListQueryV2DataDataAccountStatus;
  advertiser_id?: number | string;
  advertiser_name?: string;
  agent_id?: number | string;
  agent_name?: string;
  brand_balance?: number;
  brand_balance_valid?: number;
  brand_grant_balance?: number;
  brand_non_grant_balance_valid?: number;
  cash_cost?: number;
  company_id?: number | string;
  company_name?: string;
  first_industry?: string;
  first_industry_id?: number | string;
  grant_cost?: number;
  second_industry?: string;
  second_industry_id?: number | string;
  stat_cost?: number;
}

