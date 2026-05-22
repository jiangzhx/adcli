// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_tools_allow_coupon_v1_0_response_data.go
// Do not edit manually.

import type { QianchuanToolsAllowCouponV10ResponseDataAwemeAllowCouponInner, QianchuanToolsAllowCouponV10ResponseDataProductAllowCouponInner } from "../models/index";

export interface QianchuanToolsAllowCouponV10ResponseData {
  adv_allow_coupon?: boolean;
  aweme_allow_coupon?: QianchuanToolsAllowCouponV10ResponseDataAwemeAllowCouponInner[];
  product_allow_coupon?: QianchuanToolsAllowCouponV10ResponseDataProductAllowCouponInner[];
}

