// 由 oceanengine/ad_open_sdk_go models/model_carousel_list_v2_filtering.go 生成
// 不要手动编辑。

import type { CarouselListV2FilteringSource } from "../models/index";

export interface CarouselListV2Filtering {
  audio_id?: string;
  carousel_ids?: (number | string)[];
  end_time?: string;
  file_name?: string;
  image_ids?: string[];
  source?: CarouselListV2FilteringSource[];
  start_time?: string;
}

