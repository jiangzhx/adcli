// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ClueCouponDetailV2DataCouponNeedPhone, ClueCouponDetailV2DataCouponNeedSmsVerify, ClueCouponDetailV2DataCouponStatus, ClueCouponDetailV2ResponseDataCouponGlobalLimit, ClueCouponDetailV2ResponseDataCouponResourceListInner, ClueCouponDetailV2ResponseDataCouponUserLimit } from "../models";

export interface ClueCouponDetailV2ResponseDataCoupon {
  coupon_id?: number | string;
  create_time?: string;
  deliver_end?: string;
  deliver_start?: string;
  global_limit?: ClueCouponDetailV2ResponseDataCouponGlobalLimit;
  need_phone?: ClueCouponDetailV2DataCouponNeedPhone;
  need_sms_verify?: ClueCouponDetailV2DataCouponNeedSmsVerify;
  resource_list?: ClueCouponDetailV2ResponseDataCouponResourceListInner[];
  status?: ClueCouponDetailV2DataCouponStatus;
  title?: string;
  update_time?: string;
  user_limit?: ClueCouponDetailV2ResponseDataCouponUserLimit;
}

