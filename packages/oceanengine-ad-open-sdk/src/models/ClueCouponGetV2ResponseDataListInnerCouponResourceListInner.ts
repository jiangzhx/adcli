// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ClueCouponGetV2DataListCouponResourceListCodeType, ClueCouponGetV2DataListCouponResourceListIndustryType, ClueCouponGetV2DataListCouponResourceListResourceType, ClueCouponGetV2ResponseDataListInnerCouponResourceListInnerGiftListInner } from "../models";

export interface ClueCouponGetV2ResponseDataListInnerCouponResourceListInner {
  android_link?: string;
  audit_msg?: string;
  code?: string;
  code_refer_url?: string;
  code_type?: ClueCouponGetV2DataListCouponResourceListCodeType;
  condition?: string;
  discount?: number;
  gift_list?: ClueCouponGetV2ResponseDataListInnerCouponResourceListInnerGiftListInner[];
  head_image_url?: string;
  industry_type?: ClueCouponGetV2DataListCouponResourceListIndustryType;
  ios_link?: string;
  link?: string;
  logo_image_url?: string;
  max_amount?: number;
  merchant_name?: string;
  min_amount?: number;
  notification?: string;
  relief_amount?: number;
  resource_id?: number;
  resource_type?: ClueCouponGetV2DataListCouponResourceListResourceType;
  service_num?: string;
  stock?: number;
  store_ids?: number[];
  title?: string;
  use_type?: string;
  valid_days?: number;
  valid_end?: string;
  valid_start?: string;
}

