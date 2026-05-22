// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { CarouselCreateV2ResponseDataCarouselAudio, CarouselCreateV2ResponseDataCarouselImagesInner } from "../models";

export interface CarouselCreateV2ResponseDataCarousel {
  audio?: CarouselCreateV2ResponseDataCarouselAudio;
  carousel_id?: number | string;
  file_name?: string;
  images?: CarouselCreateV2ResponseDataCarouselImagesInner[];
  uri?: string;
}

