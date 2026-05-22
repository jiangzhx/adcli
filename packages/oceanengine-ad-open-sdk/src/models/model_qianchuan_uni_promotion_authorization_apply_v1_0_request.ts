// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_uni_promotion_authorization_apply_v1_0_request.go
// Do not edit manually.

import type { QianchuanUniPromotionAuthorizationApplyV10MarketingGoal } from "../models/index";

export interface QianchuanUniPromotionAuthorizationApplyV10Request {
  advertiser_id: number | string;
  aweme_ids: (number | string)[];
  marketing_goal: QianchuanUniPromotionAuthorizationApplyV10MarketingGoal;
  shop_id?: number | string;
}

