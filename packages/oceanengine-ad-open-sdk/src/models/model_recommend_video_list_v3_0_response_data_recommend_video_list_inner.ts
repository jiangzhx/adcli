// 由 oceanengine/ad_open_sdk_go models/model_recommend_video_list_v3_0_response_data_recommend_video_list_inner.go 生成
// 不要手动编辑。

import type { RecommendVideoListV30DataRecommendVideoListImageMode } from "../models/index";

export interface RecommendVideoListV30ResponseDataRecommendVideoListInner {
  aweme_id?: string[];
  duration?: number;
  image_mode?: RecommendVideoListV30DataRecommendVideoListImageMode;
  item_id?: number | string;
  material_id?: number | string;
  title?: string;
  video_cover_id?: string;
  video_cover_url?: string;
  video_id?: string;
  video_play_url?: string;
}

