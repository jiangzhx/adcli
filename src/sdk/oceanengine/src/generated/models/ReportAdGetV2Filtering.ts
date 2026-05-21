// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ReportAdGetV2FilteringCampaignTypes, ReportAdGetV2FilteringCreativeMaterialModes, ReportAdGetV2FilteringDeliveryMode, ReportAdGetV2FilteringImageModes, ReportAdGetV2FilteringInventoryTypes, ReportAdGetV2FilteringLandingType, ReportAdGetV2FilteringLandingTypes, ReportAdGetV2FilteringPricing, ReportAdGetV2FilteringPricingCategories, ReportAdGetV2FilteringPricings, ReportAdGetV2FilteringStatus } from "../models";

export interface ReportAdGetV2Filtering {
  ad_ids?: number[];
  ad_name?: string;
  campaign_id?: number;
  campaign_ids?: number[];
  campaign_types?: ReportAdGetV2FilteringCampaignTypes[];
  creative_ids?: number[];
  creative_material_modes?: ReportAdGetV2FilteringCreativeMaterialModes[];
  delivery_mode?: ReportAdGetV2FilteringDeliveryMode[];
  image_modes?: ReportAdGetV2FilteringImageModes[];
  inventory_types?: ReportAdGetV2FilteringInventoryTypes[];
  landing_type?: ReportAdGetV2FilteringLandingType;
  landing_types?: ReportAdGetV2FilteringLandingTypes[];
  pricing?: ReportAdGetV2FilteringPricing;
  pricing_categories?: ReportAdGetV2FilteringPricingCategories[];
  pricings?: ReportAdGetV2FilteringPricings[];
  status?: ReportAdGetV2FilteringStatus;
}

