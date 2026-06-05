// 由 oceanengine/ad_open_sdk_go models/model_dpa_video_get_v2_response_data_list_inner.go 生成
// 不要手动编辑。

import type { DpaVideoGetV2ResponseDataListInnerImageInfo, DpaVideoGetV2ResponseDataListInnerVideoInfo } from "../models/index";

export interface DpaVideoGetV2ResponseDataListInner {
  create_time?: string;
  image_info?: DpaVideoGetV2ResponseDataListInnerImageInfo;
  name?: string;
  package_id?: string;
  product_id?: number | string;
  product_platform_id?: number | string;
  video_info?: DpaVideoGetV2ResponseDataListInnerVideoInfo;
}

