// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_report_material_get_v1_0_filtering.go
// Do not edit manually.

import type { QianchuanReportMaterialGetV10FilteringAnalysisType, QianchuanReportMaterialGetV10FilteringCarouselSource, QianchuanReportMaterialGetV10FilteringImageSource, QianchuanReportMaterialGetV10FilteringMaterialMode, QianchuanReportMaterialGetV10FilteringMaterialType, QianchuanReportMaterialGetV10FilteringVideoSource } from "../models/index";

export interface QianchuanReportMaterialGetV10Filtering {
  analysis_type?: QianchuanReportMaterialGetV10FilteringAnalysisType[];
  carousel_source?: QianchuanReportMaterialGetV10FilteringCarouselSource[];
  image_source?: QianchuanReportMaterialGetV10FilteringImageSource[];
  material_id?: number | string[];
  material_mode?: QianchuanReportMaterialGetV10FilteringMaterialMode[];
  material_type: QianchuanReportMaterialGetV10FilteringMaterialType;
  video_source?: QianchuanReportMaterialGetV10FilteringVideoSource[];
}

