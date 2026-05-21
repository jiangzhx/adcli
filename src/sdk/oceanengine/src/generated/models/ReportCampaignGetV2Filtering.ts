// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ReportCampaignGetV2FilteringCampaignTypes, ReportCampaignGetV2FilteringCreativeMaterialModes, ReportCampaignGetV2FilteringDeliveryMode, ReportCampaignGetV2FilteringImageModes, ReportCampaignGetV2FilteringInventoryTypes, ReportCampaignGetV2FilteringLandingType, ReportCampaignGetV2FilteringLandingTypes, ReportCampaignGetV2FilteringPricingCategories, ReportCampaignGetV2FilteringPricings, ReportCampaignGetV2FilteringStatus } from "../models";

export interface ReportCampaignGetV2Filtering {
  ad_ids?: number[];
  campaign_ids?: number[];
  campaign_name?: string;
  campaign_types?: ReportCampaignGetV2FilteringCampaignTypes[];
  creative_ids?: number[];
  creative_material_modes?: ReportCampaignGetV2FilteringCreativeMaterialModes[];
  delivery_mode?: ReportCampaignGetV2FilteringDeliveryMode[];
  image_modes?: ReportCampaignGetV2FilteringImageModes[];
  inventory_types?: ReportCampaignGetV2FilteringInventoryTypes[];
  landing_type?: ReportCampaignGetV2FilteringLandingType;
  landing_types?: ReportCampaignGetV2FilteringLandingTypes[];
  pricing_categories?: ReportCampaignGetV2FilteringPricingCategories[];
  pricings?: ReportCampaignGetV2FilteringPricings[];
  status?: ReportCampaignGetV2FilteringStatus;
}

