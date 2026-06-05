// 由 oceanengine/ad_open_sdk_go models/model_carousel_create_v2_response_data_carousel.go 生成
// 不要手动编辑。

import type { CarouselCreateV2ResponseDataCarouselAudio, CarouselCreateV2ResponseDataCarouselImagesInner } from "../models/index";

export interface CarouselCreateV2ResponseDataCarousel {
  audio?: CarouselCreateV2ResponseDataCarouselAudio;
  carousel_id?: number | string;
  file_name?: string;
  images?: CarouselCreateV2ResponseDataCarouselImagesInner[];
  uri?: string;
}

