// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAwemeUniPromotionOrderCreateV10MarketingGoal, QianchuanAwemeUniPromotionOrderCreateV10RequestDeliverySetting } from "../models";

export interface QianchuanAwemeUniPromotionOrderCreateV10Request {
  advertiser_id: number | string;
  aweme_id: number | string;
  delivery_setting: QianchuanAwemeUniPromotionOrderCreateV10RequestDeliverySetting;
  marketing_goal: QianchuanAwemeUniPromotionOrderCreateV10MarketingGoal;
  product_id?: number | string;
}

