// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ReportCreativeGetV2FilteringCampaignTypes, ReportCreativeGetV2FilteringCreativeMaterialModes, ReportCreativeGetV2FilteringDeliveryMode, ReportCreativeGetV2FilteringImageMode, ReportCreativeGetV2FilteringImageModes, ReportCreativeGetV2FilteringInventoryTypes, ReportCreativeGetV2FilteringLandingType, ReportCreativeGetV2FilteringLandingTypes, ReportCreativeGetV2FilteringPricing, ReportCreativeGetV2FilteringPricingCategories, ReportCreativeGetV2FilteringPricings, ReportCreativeGetV2FilteringStatus } from "../models";

export interface ReportCreativeGetV2Filtering {
  ad_id?: number;
  ad_ids?: number[];
  ad_name?: string;
  campaign_id?: number;
  campaign_ids?: number[];
  campaign_types?: ReportCreativeGetV2FilteringCampaignTypes[];
  creative_ids?: number[];
  creative_material_modes?: ReportCreativeGetV2FilteringCreativeMaterialModes[];
  creative_title?: string;
  delivery_mode?: ReportCreativeGetV2FilteringDeliveryMode[];
  image_mode?: ReportCreativeGetV2FilteringImageMode;
  image_modes?: ReportCreativeGetV2FilteringImageModes[];
  inventory_types?: ReportCreativeGetV2FilteringInventoryTypes[];
  landing_type?: ReportCreativeGetV2FilteringLandingType;
  landing_types?: ReportCreativeGetV2FilteringLandingTypes[];
  pricing?: ReportCreativeGetV2FilteringPricing;
  pricing_categories?: ReportCreativeGetV2FilteringPricingCategories[];
  pricings?: ReportCreativeGetV2FilteringPricings[];
  status?: ReportCreativeGetV2FilteringStatus;
}

