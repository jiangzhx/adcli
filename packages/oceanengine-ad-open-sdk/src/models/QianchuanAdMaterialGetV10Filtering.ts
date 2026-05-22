// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { QianchuanAdMaterialGetV10FilteringAnalysisType, QianchuanAdMaterialGetV10FilteringHavingCost, QianchuanAdMaterialGetV10FilteringImageMode, QianchuanAdMaterialGetV10FilteringMaterialType, QianchuanAdMaterialGetV10FilteringVideoSource } from "../models";

export interface QianchuanAdMaterialGetV10Filtering {
  analysis_type?: QianchuanAdMaterialGetV10FilteringAnalysisType[];
  end_time?: string;
  having_cost?: QianchuanAdMaterialGetV10FilteringHavingCost;
  image_mode?: QianchuanAdMaterialGetV10FilteringImageMode[];
  material_type: QianchuanAdMaterialGetV10FilteringMaterialType;
  search_keyword?: string;
  start_time?: string;
  video_source?: QianchuanAdMaterialGetV10FilteringVideoSource[];
}

