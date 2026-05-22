// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanMaterialGetV10DataAdMaterialInfosMaterialInfoVideoMaterialImageMode, QianchuanMaterialGetV10DataAdMaterialInfosMaterialInfoVideoMaterialSource, QianchuanMaterialGetV10ResponseDataAdMaterialInfosInnerMaterialInfoVideoMaterialCoverImage } from "../models";

export interface QianchuanMaterialGetV10ResponseDataAdMaterialInfosInnerMaterialInfoVideoMaterial {
  analysis_type?: string[];
  cover_image?: QianchuanMaterialGetV10ResponseDataAdMaterialInfosInnerMaterialInfoVideoMaterialCoverImage;
  image_mode?: QianchuanMaterialGetV10DataAdMaterialInfosMaterialInfoVideoMaterialImageMode;
  material_id?: number | string;
  source?: QianchuanMaterialGetV10DataAdMaterialInfosMaterialInfoVideoMaterialSource;
  title?: string;
  video_duration?: number;
  video_id?: string;
}

