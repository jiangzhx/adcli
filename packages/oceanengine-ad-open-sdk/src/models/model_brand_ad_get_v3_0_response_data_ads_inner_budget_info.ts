// Generated from oceanengine/ad_open_sdk_go models/model_brand_ad_get_v3_0_response_data_ads_inner_budget_info.go
// Do not edit manually.

import type { BrandAdGetV30DataAdsBudgetInfoGdSendType, BrandAdGetV30DataAdsBudgetInfoPricingType, BrandAdGetV30ResponseDataAdsInnerBudgetInfoQuantityInfoInner } from "../models/index";

export interface BrandAdGetV30ResponseDataAdsInnerBudgetInfo {
  bid?: number;
  budget?: number;
  daily_quantity?: Record<string, number>;
  gd_send_type?: BrandAdGetV30DataAdsBudgetInfoGdSendType;
  pricing_type?: BrandAdGetV30DataAdsBudgetInfoPricingType;
  quantity_info: BrandAdGetV30ResponseDataAdsInnerBudgetInfoQuantityInfoInner[];
}

