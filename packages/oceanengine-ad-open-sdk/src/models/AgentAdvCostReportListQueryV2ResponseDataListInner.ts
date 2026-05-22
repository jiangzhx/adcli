// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { AgentAdvCostReportListQueryV2DataListAppName, AgentAdvCostReportListQueryV2DataListBusinessType, AgentAdvCostReportListQueryV2DataListCashbackType, AgentAdvCostReportListQueryV2DataListCostSource, AgentAdvCostReportListQueryV2DataListCpt, AgentAdvCostReportListQueryV2DataListEcommerceType, AgentAdvCostReportListQueryV2DataListFeedslive, AgentAdvCostReportListQueryV2DataListIsMatchingProvince, AgentAdvCostReportListQueryV2DataListPricingCategory, AgentAdvCostReportListQueryV2DataListSettlementStatsType, AgentAdvCostReportListQueryV2DataListSpuLabelName, AgentAdvCostReportListQueryV2DataListSystemOrigin } from "../models";

export interface AgentAdvCostReportListQueryV2ResponseDataListInner {
  adv_id?: number | string;
  adv_name?: string;
  agent_id?: number | string;
  agent_name?: string;
  agent_performance_cost?: number;
  agent_performance_grant_cost?: number;
  app_name?: AgentAdvCostReportListQueryV2DataListAppName;
  attribution_date?: string;
  brand_product_second_type?: number;
  brand_product_second_type_name?: string;
  business_type?: AgentAdvCostReportListQueryV2DataListBusinessType;
  business_type_name?: string;
  cashback_type?: AgentAdvCostReportListQueryV2DataListCashbackType;
  cashback_type_name?: string;
  company_id?: number | string;
  company_name?: string;
  cost?: number;
  cost_source?: AgentAdvCostReportListQueryV2DataListCostSource;
  cost_source_name?: string;
  cpt?: AgentAdvCostReportListQueryV2DataListCpt;
  cpt_name?: string;
  credit_cost?: number;
  customer_id?: number | string;
  customer_name?: string;
  customer_performance_grant_cost?: number;
  ecommerce_type?: AgentAdvCostReportListQueryV2DataListEcommerceType;
  feedslive?: AgentAdvCostReportListQueryV2DataListFeedslive;
  feedslive_name?: string;
  first_agent_id?: number | string;
  first_agent_name?: string;
  first_industry?: string;
  grant_cost?: number;
  is_matching_province?: AgentAdvCostReportListQueryV2DataListIsMatchingProvince;
  no_grant_cost?: number;
  prepay_cost?: number;
  pricing_category?: AgentAdvCostReportListQueryV2DataListPricingCategory;
  pricing_category_name?: string;
  project_name?: string;
  project_serial?: string;
  promotion_type?: number;
  register_time?: string;
  sale_id?: number | string;
  sale_name?: string;
  second_agent_id?: number | string;
  second_agent_name?: string;
  second_industry?: string;
  settlement_first_industry_name?: string;
  settlement_internal_industry_category?: string;
  settlement_second_industry_name?: string;
  settlement_stats_type?: AgentAdvCostReportListQueryV2DataListSettlementStatsType;
  spu_id?: number | string;
  spu_label_name?: AgentAdvCostReportListQueryV2DataListSpuLabelName;
  spu_name?: string;
  sub_shared_wallet_cost?: number;
  sub_shared_wallet_credit_cost?: number;
  sub_shared_wallet_id?: number | string;
  sub_shared_wallet_name?: string;
  sub_shared_wallet_prepay_cost?: number;
  system_origin?: AgentAdvCostReportListQueryV2DataListSystemOrigin;
  unique_key?: string;
}

