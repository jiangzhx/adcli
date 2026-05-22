// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_report_material_get_v1_0_response_data_list_inner.go
// Do not edit manually.

import type { QianchuanReportMaterialGetV10DataListCarouselSource, QianchuanReportMaterialGetV10DataListImageSource, QianchuanReportMaterialGetV10DataListMaterialMode, QianchuanReportMaterialGetV10DataListMaterialType, QianchuanReportMaterialGetV10DataListVideoSource, QianchuanReportMaterialGetV10ResponseDataListInnerFields } from "../models/index";

export interface QianchuanReportMaterialGetV10ResponseDataListInner {
  advertiser_id: number | string;
  analysis_type?: string[];
  carousel_source?: QianchuanReportMaterialGetV10DataListCarouselSource;
  create_data?: string;
  create_time?: string;
  duration?: number;
  fields?: QianchuanReportMaterialGetV10ResponseDataListInnerFields;
  image_source?: QianchuanReportMaterialGetV10DataListImageSource;
  material_id?: number | string;
  material_mode?: QianchuanReportMaterialGetV10DataListMaterialMode;
  material_type: QianchuanReportMaterialGetV10DataListMaterialType;
  related_ad_cnt?: number;
  related_ad_ids?: (number | string)[];
  related_creative_cnt?: number;
  related_creative_ids?: (number | string)[];
  tags?: string;
  video_source?: QianchuanReportMaterialGetV10DataListVideoSource;
}

