// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanAdMaterialGetV10DataAdMaterialInfosMaterialInfoImageMaterialImageMode, QianchuanAdMaterialGetV10DataAdMaterialInfosMaterialInfoImageMaterialSource, QianchuanAdMaterialGetV10ResponseDataAdMaterialInfosInnerMaterialInfoImageMaterialImagesInner } from "../models";

export interface QianchuanAdMaterialGetV10ResponseDataAdMaterialInfosInnerMaterialInfoImageMaterial {
  description?: string;
  image_mode?: QianchuanAdMaterialGetV10DataAdMaterialInfosMaterialInfoImageMaterialImageMode;
  images?: QianchuanAdMaterialGetV10ResponseDataAdMaterialInfosInnerMaterialInfoImageMaterialImagesInner[];
  material_id?: number;
  music_url?: string;
  source?: QianchuanAdMaterialGetV10DataAdMaterialInfosMaterialInfoImageMaterialSource;
  title?: string;
}

