// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { QianchuanAdMaterialGetV10DataAdMaterialInfosMaterialInfoVideoMaterialImageMode, QianchuanAdMaterialGetV10DataAdMaterialInfosMaterialInfoVideoMaterialSource, QianchuanAdMaterialGetV10ResponseDataAdMaterialInfosInnerMaterialInfoVideoMaterialCoverImage } from "../models";

export interface QianchuanAdMaterialGetV10ResponseDataAdMaterialInfosInnerMaterialInfoVideoMaterial {
  cover_image?: QianchuanAdMaterialGetV10ResponseDataAdMaterialInfosInnerMaterialInfoVideoMaterialCoverImage;
  image_mode?: QianchuanAdMaterialGetV10DataAdMaterialInfosMaterialInfoVideoMaterialImageMode;
  material_id?: number;
  source?: QianchuanAdMaterialGetV10DataAdMaterialInfosMaterialInfoVideoMaterialSource;
  title?: string;
  video_duration?: number;
  video_id?: string;
}

