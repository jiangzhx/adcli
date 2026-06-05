// 由 oceanengine/ad_open_sdk_go models/model_file_video_aweme_get_v2_response_data_list_inner.go 生成
// 不要手动编辑。

import type { FileVideoAwemeGetV2DataListImageMode } from "../models/index";

export interface FileVideoAwemeGetV2ResponseDataListInner {
  album_id?: number | string;
  aweme_play_url?: string;
  duration?: number;
  if_album?: string;
  image_mode?: FileVideoAwemeGetV2DataListImageMode;
  item_id?: number | string;
  mid?: number;
  title?: string;
  video_cover_id?: string;
  video_cover_url?: string;
  video_id?: string;
}

