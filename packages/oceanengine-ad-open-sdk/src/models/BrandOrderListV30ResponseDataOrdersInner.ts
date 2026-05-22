// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { BrandOrderListV30DataOrdersAdForm, BrandOrderListV30DataOrdersAdvancedCreativeType, BrandOrderListV30DataOrdersAppOrigin, BrandOrderListV30DataOrdersAuditStatus, BrandOrderListV30DataOrdersClassify, BrandOrderListV30DataOrdersGdSendType, BrandOrderListV30DataOrdersPricingType, BrandOrderListV30DataOrdersProType, BrandOrderListV30DataOrdersStatus, BrandOrderListV30ResponseDataOrdersInnerAdInfosInner, BrandOrderListV30ResponseDataOrdersInnerAudienceInfo, BrandOrderListV30ResponseDataOrdersInnerBookingQuantityInfo, BrandOrderListV30ResponseDataOrdersInnerFailInfoListInner, BrandOrderListV30ResponseDataOrdersInnerFrequencyInfo, BrandOrderListV30ResponseDataOrdersInnerMagazinePriceInfo, BrandOrderListV30ResponseDataOrdersInnerMerchantIntention, BrandOrderListV30ResponseDataOrdersInnerPolicy, BrandOrderListV30ResponseDataOrdersInnerScheduleInfo } from "../models";

export interface BrandOrderListV30ResponseDataOrdersInner {
  ad_form?: BrandOrderListV30DataOrdersAdForm;
  ad_infos?: BrandOrderListV30ResponseDataOrdersInnerAdInfosInner[];
  advanced_creative_type?: BrandOrderListV30DataOrdersAdvancedCreativeType;
  advertiser_id?: number | string;
  app_origin?: BrandOrderListV30DataOrdersAppOrigin;
  audience_info?: BrandOrderListV30ResponseDataOrdersInnerAudienceInfo;
  audit_status?: BrandOrderListV30DataOrdersAuditStatus;
  booking_quantity_info?: BrandOrderListV30ResponseDataOrdersInnerBookingQuantityInfo;
  budget?: string;
  campaign_id?: number | string;
  campaign_name?: string;
  classify?: BrandOrderListV30DataOrdersClassify;
  create_time?: string;
  creator?: string;
  fail_info_list?: BrandOrderListV30ResponseDataOrdersInnerFailInfoListInner[];
  frequency_info?: BrandOrderListV30ResponseDataOrdersInnerFrequencyInfo;
  gd_send_type?: BrandOrderListV30DataOrdersGdSendType;
  magazine_price_info?: BrandOrderListV30ResponseDataOrdersInnerMagazinePriceInfo;
  merchant_intention?: BrandOrderListV30ResponseDataOrdersInnerMerchantIntention;
  order_id?: number | string;
  order_name?: string;
  policy?: BrandOrderListV30ResponseDataOrdersInnerPolicy;
  pricing_type?: BrandOrderListV30DataOrdersPricingType;
  pro_type?: BrandOrderListV30DataOrdersProType;
  remark?: string;
  schedule_info?: BrandOrderListV30ResponseDataOrdersInnerScheduleInfo;
  status?: BrandOrderListV30DataOrdersStatus;
}

