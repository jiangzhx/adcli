// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ClueCouponDetailV2DataCouponResourceListCodeType, ClueCouponDetailV2DataCouponResourceListIndustryType, ClueCouponDetailV2DataCouponResourceListResourceType, ClueCouponDetailV2ResponseDataCouponResourceListInnerGiftListInner } from "../models";

export interface ClueCouponDetailV2ResponseDataCouponResourceListInner {
  android_link?: string;
  audit_msg?: string;
  code?: string;
  code_refer_url?: string;
  code_type?: ClueCouponDetailV2DataCouponResourceListCodeType;
  condition?: string;
  discount?: number;
  gift_list?: ClueCouponDetailV2ResponseDataCouponResourceListInnerGiftListInner[];
  head_image_url?: string;
  industry_type?: ClueCouponDetailV2DataCouponResourceListIndustryType;
  ios_link?: string;
  link?: string;
  logo_image_url?: string;
  max_amount?: number;
  merchant_name?: string;
  min_amount?: number;
  notification?: string;
  relief_amount?: number;
  resource_id?: number;
  resource_type?: ClueCouponDetailV2DataCouponResourceListResourceType;
  service_num?: string;
  stock?: number;
  store_ids?: number[];
  title?: string;
  use_type?: string;
  valid_days?: number;
  valid_end?: string;
  valid_start?: string;
}

