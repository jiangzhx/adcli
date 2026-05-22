// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanReportMaterialGetV10DataListCarouselSource, QianchuanReportMaterialGetV10DataListImageSource, QianchuanReportMaterialGetV10DataListMaterialMode, QianchuanReportMaterialGetV10DataListMaterialType, QianchuanReportMaterialGetV10DataListVideoSource, QianchuanReportMaterialGetV10ResponseDataListInnerFields } from "../models";

export interface QianchuanReportMaterialGetV10ResponseDataListInner {
  advertiser_id: number;
  analysis_type?: string[];
  carousel_source?: QianchuanReportMaterialGetV10DataListCarouselSource;
  create_data?: string;
  create_time?: string;
  duration?: number;
  fields?: QianchuanReportMaterialGetV10ResponseDataListInnerFields;
  image_source?: QianchuanReportMaterialGetV10DataListImageSource;
  material_id?: number;
  material_mode?: QianchuanReportMaterialGetV10DataListMaterialMode;
  material_type: QianchuanReportMaterialGetV10DataListMaterialType;
  related_ad_cnt?: number;
  related_ad_ids?: number[];
  related_creative_cnt?: number;
  related_creative_ids?: number[];
  tags?: string;
  video_source?: QianchuanReportMaterialGetV10DataListVideoSource;
}

