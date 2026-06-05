// 由 oceanengine/ad_open_sdk_go models/model_local_file_carousel_list_v3_0_response_data_carousel_list_inner.go 生成
// 不要手动编辑。

import type { LocalFileCarouselListV30ResponseDataCarouselListInnerImageListInner, LocalFileCarouselListV30ResponseDataCarouselListInnerMusic } from "../models/index";

export interface LocalFileCarouselListV30ResponseDataCarouselListInner {
  carousel_id?: number | string;
  create_time?: string;
  image_list?: LocalFileCarouselListV30ResponseDataCarouselListInnerImageListInner[];
  music?: LocalFileCarouselListV30ResponseDataCarouselListInnerMusic;
  title?: string;
}

