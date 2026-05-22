// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_carousel_get_v1_0_response_data_carousels_inner.go
// Do not edit manually.

import type { QianchuanCarouselGetV10DataCarouselsImageMode, QianchuanCarouselGetV10DataCarouselsSource, QianchuanCarouselGetV10ResponseDataCarouselsInnerAudio, QianchuanCarouselGetV10ResponseDataCarouselsInnerImagesInner } from "../models/index";

export interface QianchuanCarouselGetV10ResponseDataCarouselsInner {
  audio?: QianchuanCarouselGetV10ResponseDataCarouselsInnerAudio;
  create_time?: string;
  description?: string;
  filename?: string;
  image_mode?: QianchuanCarouselGetV10DataCarouselsImageMode;
  images?: QianchuanCarouselGetV10ResponseDataCarouselsInnerImagesInner[];
  material_id?: number | string;
  source?: QianchuanCarouselGetV10DataCarouselsSource;
}

