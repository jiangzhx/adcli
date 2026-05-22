// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AgentAdvertiserSelectV2FilteringCanCopy, AgentAdvertiserSelectV2FilteringCostPeriod } from "../models";

export interface AgentAdvertiserSelectV2Filtering {
  advertiser_ids?: number[];
  can_copy?: AgentAdvertiserSelectV2FilteringCanCopy;
  cost_period?: AgentAdvertiserSelectV2FilteringCostPeriod;
  create_end_time?: string;
  create_start_time?: string;
  is_exist_sale?: boolean;
  nongrant_valid_balance_gt?: number;
  sale_id?: number;
  sale_name?: string;
  stat_cost_fen_gt?: number;
  total_balance_gt?: number;
}

