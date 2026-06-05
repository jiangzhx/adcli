// 由 oceanengine/ad_open_sdk_go models/model_carousel_create_v2_request.go 生成
// 不要手动编辑。

import type { CarouselCreateV2RequestImagesInner } from "../models/index";

export interface CarouselCreateV2Request {
  advertiser_id: number | string;
  audio_id?: string;
  description?: string;
  file_name?: string;
  images: CarouselCreateV2RequestImagesInner[];
}

