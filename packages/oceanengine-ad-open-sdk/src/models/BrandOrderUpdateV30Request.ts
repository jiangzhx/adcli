// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { BrandOrderUpdateV30RequestAudienceInfo, BrandOrderUpdateV30RequestBookingQuantityInfo, BrandOrderUpdateV30RequestFrequencyInfo } from "../models";

export interface BrandOrderUpdateV30Request {
  advertiser_id: number | string;
  audience_info?: BrandOrderUpdateV30RequestAudienceInfo;
  booking_quantity_info?: BrandOrderUpdateV30RequestBookingQuantityInfo;
  budget?: number;
  frequency_info?: BrandOrderUpdateV30RequestFrequencyInfo;
  intention_no?: string;
  order_id: number | string;
  order_name?: string;
  policy_no?: string;
  remark?: string;
  staff_ids?: number | string[];
}

