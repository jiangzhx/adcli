// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { CarouselAdGetV2ResponseDataCarouselsInnerAudio, CarouselAdGetV2ResponseDataCarouselsInnerImagesInner } from "../models";

export interface CarouselAdGetV2ResponseDataCarouselsInner {
  audio?: CarouselAdGetV2ResponseDataCarouselsInnerAudio;
  carousel_type?: number;
  file_name?: string;
  id?: number;
  images?: CarouselAdGetV2ResponseDataCarouselsInnerImagesInner[];
  uri?: string;
}

