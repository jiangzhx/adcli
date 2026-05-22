// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanFileVideoAwemeGetV10DataVideoListImageMode, QianchuanFileVideoAwemeGetV10DataVideoListIsRecommend } from "../models";

export interface QianchuanFileVideoAwemeGetV10ResponseDataVideoListInner {
  aweme_item_id?: number;
  comment_cnt?: number;
  duration?: number;
  height?: number;
  image_mode?: QianchuanFileVideoAwemeGetV10DataVideoListImageMode;
  is_ai_create?: boolean;
  is_recommend?: QianchuanFileVideoAwemeGetV10DataVideoListIsRecommend;
  like_cnt?: number;
  material_id?: number;
  share_cnt?: number;
  title?: string;
  url?: string;
  video_cover_url?: string;
  video_id?: string;
  view_cnt?: number;
  width?: number;
}

