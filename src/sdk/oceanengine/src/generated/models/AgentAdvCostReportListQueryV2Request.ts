// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { AgentAdvCostReportListQueryV2CostAggType, AgentAdvCostReportListQueryV2OrderType, AgentAdvCostReportListQueryV2RequestFiltering } from "../models";

export interface AgentAdvCostReportListQueryV2Request {
  agent_id: number;
  cost_agg_type?: AgentAdvCostReportListQueryV2CostAggType;
  end_date: string;
  filtering?: AgentAdvCostReportListQueryV2RequestFiltering;
  last_unique_key?: string;
  order_field?: string;
  order_type?: AgentAdvCostReportListQueryV2OrderType;
  page?: number;
  page_size?: number;
  start_date: string;
}

