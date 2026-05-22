// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { CarouselListV2DataCarouselsSource, CarouselListV2ResponseDataCarouselsInnerAudio, CarouselListV2ResponseDataCarouselsInnerImagesInner } from "../models";

export interface CarouselListV2ResponseDataCarouselsInner {
  audio?: CarouselListV2ResponseDataCarouselsInnerAudio;
  create_time?: string;
  file_name?: string;
  id?: number;
  images?: CarouselListV2ResponseDataCarouselsInnerImagesInner[];
  source?: CarouselListV2DataCarouselsSource;
  update_time?: string;
}

