// Generated from oceanengine/ad_open_sdk_go models/model_carousel_ad_get_v2_response_data_carousels_inner.go
// Do not edit manually.

import type { CarouselAdGetV2ResponseDataCarouselsInnerAudio, CarouselAdGetV2ResponseDataCarouselsInnerImagesInner } from "../models/index";

export interface CarouselAdGetV2ResponseDataCarouselsInner {
  audio?: CarouselAdGetV2ResponseDataCarouselsInnerAudio;
  carousel_type?: number;
  file_name?: string;
  id?: number | string;
  images?: CarouselAdGetV2ResponseDataCarouselsInnerImagesInner[];
  uri?: string;
}

