// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { CarouselCreateV2RequestImagesInner } from "../models";

export interface CarouselCreateV2Request {
  advertiser_id: number;
  audio_id?: string;
  description?: string;
  file_name?: string;
  images: CarouselCreateV2RequestImagesInner[];
}

