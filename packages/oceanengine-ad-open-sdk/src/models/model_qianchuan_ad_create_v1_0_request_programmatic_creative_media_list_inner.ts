// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_ad_create_v1_0_request_programmatic_creative_media_list_inner.go 生成
// 不要手动编辑。

import type { QianchuanAdCreateV10ProgrammaticCreativeMediaListImageMode } from "../models/index";

export interface QianchuanAdCreateV10RequestProgrammaticCreativeMediaListInner {
  aweme_carousel_id?: number | string;
  aweme_item_id?: number | string;
  carousel_id?: number | string;
  image_ids?: string[];
  image_mode?: QianchuanAdCreateV10ProgrammaticCreativeMediaListImageMode;
  video_cover_id?: string;
  video_id?: string;
}

