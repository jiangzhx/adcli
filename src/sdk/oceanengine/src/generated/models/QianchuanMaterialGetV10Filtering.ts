// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { QianchuanMaterialGetV10FilteringAnalysisType, QianchuanMaterialGetV10FilteringHavingCost, QianchuanMaterialGetV10FilteringImageMode, QianchuanMaterialGetV10FilteringMaterialType, QianchuanMaterialGetV10FilteringVideoSource } from "../models";

export interface QianchuanMaterialGetV10Filtering {
  analysis_type?: QianchuanMaterialGetV10FilteringAnalysisType[];
  end_time?: string;
  having_cost?: QianchuanMaterialGetV10FilteringHavingCost;
  image_mode?: QianchuanMaterialGetV10FilteringImageMode[];
  material_type: QianchuanMaterialGetV10FilteringMaterialType;
  search_keyword?: string;
  start_time?: string;
  video_source?: QianchuanMaterialGetV10FilteringVideoSource[];
}

