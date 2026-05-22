// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_smart_delivery_goal_qyt_spec.go
// Do not edit manually.

import type { CostConstraintScene, SmartBidType } from "../v3/index";

export interface SmartDeliveryGoalQytSpec {
  ecommerce_order_cost?: number;
  ecommerce_order_roi?: number;
  promotion_view_key_page_cost?: number;
  view_commodity_page_cost?: number;
  smart_bid_type?: SmartBidType;
  custom_cost_cap?: number;
  cost_constraint_scene?: CostConstraintScene;
  live_stream_audience_cost?: number;
  click_cost?: number;
  first_twenty_four_hour_ecommerce_order_cost?: number;
  net_profit_cost?: number;
  net_profit_roi?: number;
  collect_cost?: number;
}

