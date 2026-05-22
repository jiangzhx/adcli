// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanCarouselGetV10DataCarouselsImageMode, QianchuanCarouselGetV10DataCarouselsSource, QianchuanCarouselGetV10ResponseDataCarouselsInnerAudio, QianchuanCarouselGetV10ResponseDataCarouselsInnerImagesInner } from "../models";

export interface QianchuanCarouselGetV10ResponseDataCarouselsInner {
  audio?: QianchuanCarouselGetV10ResponseDataCarouselsInnerAudio;
  create_time?: string;
  description?: string;
  filename?: string;
  image_mode?: QianchuanCarouselGetV10DataCarouselsImageMode;
  images?: QianchuanCarouselGetV10ResponseDataCarouselsInnerImagesInner[];
  material_id?: number;
  source?: QianchuanCarouselGetV10DataCarouselsSource;
}

