// Generated from oceanengine/ad_open_sdk_go models/model_brand_order_create_v3_0_request.go
// Do not edit manually.

import type { BrandOrderCreateV30AdForm, BrandOrderCreateV30AppOrigin, BrandOrderCreateV30Classify, BrandOrderCreateV30GdSendType, BrandOrderCreateV30PricingType, BrandOrderCreateV30ProType, BrandOrderCreateV30RequestAudienceInfo, BrandOrderCreateV30RequestBookingQuantityInfo, BrandOrderCreateV30RequestFrequencyInfo } from "../models/index";

export interface BrandOrderCreateV30Request {
  ad_form: BrandOrderCreateV30AdForm;
  advertiser_id: number | string;
  app_origin: BrandOrderCreateV30AppOrigin;
  audience_info?: BrandOrderCreateV30RequestAudienceInfo;
  booking_quantity_info: BrandOrderCreateV30RequestBookingQuantityInfo;
  budget: number;
  campaign_id: number | string;
  classify: BrandOrderCreateV30Classify;
  frequency_info?: BrandOrderCreateV30RequestFrequencyInfo;
  gd_send_type: BrandOrderCreateV30GdSendType;
  intention_no?: string;
  name: string;
  policy_no: string;
  pricing_type: BrandOrderCreateV30PricingType;
  pro_type: BrandOrderCreateV30ProType;
  remark?: string;
  staff_ids?: (number | string)[];
}

