// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_today_live_room_product_list_get_v1_0_response_data_list_inner.go
// Do not edit manually.

import type { QianchuanTodayLiveRoomProductListGetV10DataListExplainStatus } from "../models/index";

export interface QianchuanTodayLiveRoomProductListGetV10ResponseDataListInner {
  ad_live_order_settle_cost_per_product_7d?: number;
  ad_live_order_settle_roi_per_product_7d?: number;
  explain_status?: QianchuanTodayLiveRoomProductListGetV10DataListExplainStatus;
  img_url?: string;
  live_cost_per_product?: number;
  live_order_refund_amount?: number;
  live_order_settle_amount_7d?: number;
  live_order_settle_count_7d?: number;
  live_order_settle_count_rate_7d?: number;
  live_pay_order_count_alias?: number;
  live_pay_order_gmv_alias?: number;
  live_pay_order_roi_per_product?: number;
  live_product_Inventory?: number;
  live_product_bind_time?: string;
  live_product_explain_cnt?: number;
  live_product_price?: number;
  luban_live_pay_order_count?: number;
  luban_live_pay_order_gmv?: number;
  productId?: number | string;
  product_click_pay_ucnt_ratio?: number;
  title?: string;
  total_live_pay_order_gpm_ecom?: number;
}

