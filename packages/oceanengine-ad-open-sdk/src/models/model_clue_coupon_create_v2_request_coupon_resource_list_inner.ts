// Generated from oceanengine/ad_open_sdk_go models/model_clue_coupon_create_v2_request_coupon_resource_list_inner.go
// Do not edit manually.

import type { ClueCouponCreateV2CouponResourceListCodeType, ClueCouponCreateV2CouponResourceListIndustryType, ClueCouponCreateV2CouponResourceListResourceType, ClueCouponCreateV2CouponResourceListUseType, ClueCouponCreateV2RequestCouponResourceListInnerGiftListInner } from "../models/index";

export interface ClueCouponCreateV2RequestCouponResourceListInner {
  amount?: number;
  android_link?: string;
  code?: string;
  code_type: ClueCouponCreateV2CouponResourceListCodeType;
  condition: string;
  discount?: number;
  gift_list?: ClueCouponCreateV2RequestCouponResourceListInnerGiftListInner[];
  head_image_url: string;
  industry_type: ClueCouponCreateV2CouponResourceListIndustryType;
  ios_link?: string;
  link?: string;
  logo_image_url: string;
  max_amount?: number;
  merchant_name: string;
  min_amount?: number;
  notification: string;
  relief_amount?: number;
  resource_type: ClueCouponCreateV2CouponResourceListResourceType;
  service_num: string;
  stock?: number;
  store_ids?: number | string[];
  title: string;
  use_type: ClueCouponCreateV2CouponResourceListUseType;
  valid_days?: number;
  valid_end?: string;
  valid_start?: string;
}

