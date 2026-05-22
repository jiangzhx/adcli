// Generated from oceanengine/ad_open_sdk_go models/model_carousel_create_v2_request.go
// Do not edit manually.

import type { CarouselCreateV2RequestImagesInner } from "../models/index";

export interface CarouselCreateV2Request {
  advertiser_id: number | string;
  audio_id?: string;
  description?: string;
  file_name?: string;
  images: CarouselCreateV2RequestImagesInner[];
}

