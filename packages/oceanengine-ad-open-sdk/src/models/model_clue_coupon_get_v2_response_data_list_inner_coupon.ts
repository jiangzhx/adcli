// Generated from oceanengine/ad_open_sdk_go models/model_clue_coupon_get_v2_response_data_list_inner_coupon.go
// Do not edit manually.

import type { ClueCouponGetV2DataListCouponNeedPhone, ClueCouponGetV2DataListCouponNeedSmsVerify, ClueCouponGetV2DataListCouponStatus, ClueCouponGetV2ResponseDataListInnerCouponGlobalLimit, ClueCouponGetV2ResponseDataListInnerCouponResourceListInner, ClueCouponGetV2ResponseDataListInnerCouponUserLimit } from "../models/index";

export interface ClueCouponGetV2ResponseDataListInnerCoupon {
  coupon_id?: number | string;
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

