// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { BrandAdGetV30DataAdsBudgetInfoGdSendType, BrandAdGetV30DataAdsBudgetInfoPricingType, BrandAdGetV30ResponseDataAdsInnerBudgetInfoQuantityInfoInner } from "../models";

export interface BrandAdGetV30ResponseDataAdsInnerBudgetInfo {
  bid?: number;
  budget?: number;
  daily_quantity?: Record<string, number>;
  gd_send_type?: BrandAdGetV30DataAdsBudgetInfoGdSendType;
  pricing_type?: BrandAdGetV30DataAdsBudgetInfoPricingType;
  quantity_info: BrandAdGetV30ResponseDataAdsInnerBudgetInfoQuantityInfoInner[];
}

