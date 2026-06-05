// 由 oceanengine/ad_open_sdk_go models/model_carousel_list_v2_response_data_carousels_inner.go 生成
// 不要手动编辑。

import type { CarouselListV2DataCarouselsSource, CarouselListV2ResponseDataCarouselsInnerAudio, CarouselListV2ResponseDataCarouselsInnerImagesInner } from "../models/index";

export interface CarouselListV2ResponseDataCarouselsInner {
  audio?: CarouselListV2ResponseDataCarouselsInnerAudio;
  create_time?: string;
  file_name?: string;
  id?: number | string;
  images?: CarouselListV2ResponseDataCarouselsInnerImagesInner[];
  source?: CarouselListV2DataCarouselsSource;
  update_time?: string;
}

