// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ClueCouponCreateV2ActivityType, ClueCouponCreateV2RequestCoupon } from "../models";

export interface ClueCouponCreateV2Request {
  activity_type: ClueCouponCreateV2ActivityType;
  advertiser_id: number | string;
  bind_form_id?: number | string;
  coupon?: ClueCouponCreateV2RequestCoupon;
}

