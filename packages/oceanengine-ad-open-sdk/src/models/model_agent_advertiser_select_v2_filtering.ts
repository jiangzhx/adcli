// 由 oceanengine/ad_open_sdk_go models/model_agent_advertiser_select_v2_filtering.go 生成
// 不要手动编辑。

import type { AgentAdvertiserSelectV2FilteringCanCopy, AgentAdvertiserSelectV2FilteringCostPeriod } from "../models/index";

export interface AgentAdvertiserSelectV2Filtering {
  advertiser_ids?: (number | string)[];
  can_copy?: AgentAdvertiserSelectV2FilteringCanCopy;
  cost_period?: AgentAdvertiserSelectV2FilteringCostPeriod;
  create_end_time?: string;
  create_start_time?: string;
  is_exist_sale?: boolean;
  nongrant_valid_balance_gt?: number;
  sale_id?: number | string;
  sale_name?: string;
  stat_cost_fen_gt?: number;
  total_balance_gt?: number;
}

