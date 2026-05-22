// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanUniPromotionAdMaterialGetV10FilteringAnalysisType, QianchuanUniPromotionAdMaterialGetV10FilteringMaterialSelectType, QianchuanUniPromotionAdMaterialGetV10FilteringMaterialStatus, QianchuanUniPromotionAdMaterialGetV10FilteringMaterialType, QianchuanUniPromotionAdMaterialGetV10FilteringVideoType } from "../models";

export interface QianchuanUniPromotionAdMaterialGetV10Filtering {
  analysis_type?: QianchuanUniPromotionAdMaterialGetV10FilteringAnalysisType[];
  end_date?: string;
  material_select_type?: QianchuanUniPromotionAdMaterialGetV10FilteringMaterialSelectType;
  material_status?: QianchuanUniPromotionAdMaterialGetV10FilteringMaterialStatus;
  material_type: QianchuanUniPromotionAdMaterialGetV10FilteringMaterialType;
  product_keyword?: string;
  search_keyword?: string;
  start_date?: string;
  video_type?: QianchuanUniPromotionAdMaterialGetV10FilteringVideoType;
}

