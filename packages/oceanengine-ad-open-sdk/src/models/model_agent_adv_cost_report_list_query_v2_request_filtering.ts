// Generated from oceanengine/ad_open_sdk_go models/model_agent_adv_cost_report_list_query_v2_request_filtering.go
// Do not edit manually.

import type { AgentAdvCostReportListQueryV2FilteringAppName, AgentAdvCostReportListQueryV2FilteringCostSource, AgentAdvCostReportListQueryV2FilteringEcommerceType, AgentAdvCostReportListQueryV2FilteringPricingCategory, AgentAdvCostReportListQueryV2FilteringPromotionType, AgentAdvCostReportListQueryV2FilteringSpuLabelName } from "../models/index";

export interface AgentAdvCostReportListQueryV2RequestFiltering {
  advertiser_ids?: (number | string)[];
  agent_customer_id?: number | string;
  agent_customer_ids?: (number | string)[];
  app_name?: AgentAdvCostReportListQueryV2FilteringAppName;
  company_ids?: (number | string)[];
  company_name?: string;
  cost_source?: AgentAdvCostReportListQueryV2FilteringCostSource;
  ecommerce_type?: AgentAdvCostReportListQueryV2FilteringEcommerceType;
  first_industry?: string;
  pricing_category?: AgentAdvCostReportListQueryV2FilteringPricingCategory;
  project_name?: string;
  project_serial?: string;
  promotion_type?: AgentAdvCostReportListQueryV2FilteringPromotionType;
  second_ad_agent_id?: number | string;
  second_industry?: string;
  second_industry_list?: string[];
  spu_label_name?: AgentAdvCostReportListQueryV2FilteringSpuLabelName[];
}

