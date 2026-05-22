// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_aweme_uni_promotion_order_get_v1_0_response_data_order_list_inner.go
// Do not edit manually.

import type { QianchuanAwemeUniPromotionOrderGetV10DataOrderListMarketingGoal, QianchuanAwemeUniPromotionOrderGetV10DataOrderListStatus, QianchuanAwemeUniPromotionOrderGetV10ResponseDataOrderListInnerAwemeInfo, QianchuanAwemeUniPromotionOrderGetV10ResponseDataOrderListInnerProductInfo, QianchuanAwemeUniPromotionOrderGetV10ResponseDataOrderListInnerStatsInfo } from "../models/index";

export interface QianchuanAwemeUniPromotionOrderGetV10ResponseDataOrderListInner {
  ad_id?: number | string;
  aweme_info?: QianchuanAwemeUniPromotionOrderGetV10ResponseDataOrderListInnerAwemeInfo;
  marketing_goal?: QianchuanAwemeUniPromotionOrderGetV10DataOrderListMarketingGoal;
  order_create_time?: string;
  order_id: number | string;
  product_info?: QianchuanAwemeUniPromotionOrderGetV10ResponseDataOrderListInnerProductInfo;
  stats_info?: QianchuanAwemeUniPromotionOrderGetV10ResponseDataOrderListInnerStatsInfo;
  status?: QianchuanAwemeUniPromotionOrderGetV10DataOrderListStatus;
  support_add_budget?: boolean;
}

