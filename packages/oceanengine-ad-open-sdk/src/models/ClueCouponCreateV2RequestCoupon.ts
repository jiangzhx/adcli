// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ClueCouponCreateV2CouponNeedPhone, ClueCouponCreateV2CouponNeedSmsVerify, ClueCouponCreateV2RequestCouponGlobalLimit, ClueCouponCreateV2RequestCouponResourceListInner, ClueCouponCreateV2RequestCouponUserLimit } from "../models";

export interface ClueCouponCreateV2RequestCoupon {
  deliver_end: string;
  deliver_start: string;
  global_limit?: ClueCouponCreateV2RequestCouponGlobalLimit;
  need_phone?: ClueCouponCreateV2CouponNeedPhone;
  need_sms_verify?: ClueCouponCreateV2CouponNeedSmsVerify;
  resource_list: ClueCouponCreateV2RequestCouponResourceListInner[];
  title: string;
  user_limit?: ClueCouponCreateV2RequestCouponUserLimit;
}

