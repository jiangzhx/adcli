// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ClueCouponGetV2DataListCouponNeedPhone, ClueCouponGetV2DataListCouponNeedSmsVerify, ClueCouponGetV2DataListCouponStatus, ClueCouponGetV2ResponseDataListInnerCouponGlobalLimit, ClueCouponGetV2ResponseDataListInnerCouponResourceListInner, ClueCouponGetV2ResponseDataListInnerCouponUserLimit } from "../models";

export interface ClueCouponGetV2ResponseDataListInnerCoupon {
  coupon_id?: number;
  create_time?: string;
  deliver_end?: string;
  deliver_start?: string;
  global_limit?: ClueCouponGetV2ResponseDataListInnerCouponGlobalLimit;
  need_phone?: ClueCouponGetV2DataListCouponNeedPhone;
  need_sms_verify?: ClueCouponGetV2DataListCouponNeedSmsVerify;
  resource_list?: ClueCouponGetV2ResponseDataListInnerCouponResourceListInner[];
  status?: ClueCouponGetV2DataListCouponStatus;
  title?: string;
  update_time?: string;
  user_limit?: ClueCouponGetV2ResponseDataListInnerCouponUserLimit;
}

