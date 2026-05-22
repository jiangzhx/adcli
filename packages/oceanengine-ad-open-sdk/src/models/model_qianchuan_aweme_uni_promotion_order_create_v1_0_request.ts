// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_aweme_uni_promotion_order_create_v1_0_request.go
// Do not edit manually.

import type { QianchuanAwemeUniPromotionOrderCreateV10MarketingGoal, QianchuanAwemeUniPromotionOrderCreateV10RequestDeliverySetting } from "../models/index";

export interface QianchuanAwemeUniPromotionOrderCreateV10Request {
  advertiser_id: number | string;
  aweme_id: number | string;
  delivery_setting: QianchuanAwemeUniPromotionOrderCreateV10RequestDeliverySetting;
  marketing_goal: QianchuanAwemeUniPromotionOrderCreateV10MarketingGoal;
  product_id?: number | string;
}

