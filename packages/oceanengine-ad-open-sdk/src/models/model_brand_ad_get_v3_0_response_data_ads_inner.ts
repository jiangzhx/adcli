// Generated from oceanengine/ad_open_sdk_go models/model_brand_ad_get_v3_0_response_data_ads_inner.go
// Do not edit manually.

import type { BrandAdGetV30DataAdsClassify, BrandAdGetV30DataAdsEnableMerchantIntention, BrandAdGetV30ResponseDataAdsInnerAdStockInfosInner, BrandAdGetV30ResponseDataAdsInnerAudienceInfo, BrandAdGetV30ResponseDataAdsInnerBudgetInfo, BrandAdGetV30ResponseDataAdsInnerFrequencyInfo, BrandAdGetV30ResponseDataAdsInnerMagazinePriceInfo, BrandAdGetV30ResponseDataAdsInnerPromotionsInner, BrandAdGetV30ResponseDataAdsInnerScheduleInfo } from "../models/index";

export interface BrandAdGetV30ResponseDataAdsInner {
  ad_id?: string;
  ad_status?: number;
  ad_stock_infos?: BrandAdGetV30ResponseDataAdsInnerAdStockInfosInner[];
  advertiser_id?: number | string;
  audience_info?: BrandAdGetV30ResponseDataAdsInnerAudienceInfo;
  budget_info?: BrandAdGetV30ResponseDataAdsInnerBudgetInfo;
  budget_no?: string;
  campaign_id?: string;
  classify?: BrandAdGetV30DataAdsClassify;
  create_time?: string;
  enable_merchant_intention?: BrandAdGetV30DataAdsEnableMerchantIntention;
  frequency_info?: BrandAdGetV30ResponseDataAdsInnerFrequencyInfo;
  landing_type?: number;
  magazine_price_info?: BrandAdGetV30ResponseDataAdsInnerMagazinePriceInfo;
  merchant_intention_id?: number | string;
  merchant_intention_name?: string;
  merchant_intention_no?: string;
  name?: string;
  promotions?: BrandAdGetV30ResponseDataAdsInnerPromotionsInner[];
  remark?: string;
  schedule_info?: BrandAdGetV30ResponseDataAdsInnerScheduleInfo;
  spu_id?: number | string;
}

