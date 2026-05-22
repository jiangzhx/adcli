// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_file_video_aweme_get_v1_0_response_data_video_list_inner.go
// Do not edit manually.

import type { QianchuanFileVideoAwemeGetV10DataVideoListImageMode, QianchuanFileVideoAwemeGetV10DataVideoListIsRecommend } from "../models/index";

export interface QianchuanFileVideoAwemeGetV10ResponseDataVideoListInner {
  aweme_item_id?: number | string;
  comment_cnt?: number;
  duration?: number;
  height?: number;
  image_mode?: QianchuanFileVideoAwemeGetV10DataVideoListImageMode;
  is_ai_create?: boolean;
  is_recommend?: QianchuanFileVideoAwemeGetV10DataVideoListIsRecommend;
  like_cnt?: number;
  material_id?: number | string;
  share_cnt?: number;
  title?: string;
  url?: string;
  video_cover_url?: string;
  video_id?: string;
  view_cnt?: number;
  width?: number;
}

