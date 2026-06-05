// 由 oceanengine/ad_open_sdk_go models/model_local_file_video_aweme_get_v3_0_response_data_video_list_inner.go 生成
// 不要手动编辑。

import type { LocalFileVideoAwemeGetV30DataVideoListImageMode, LocalFileVideoAwemeGetV30DataVideoListQualityMark } from "../models/index";

export interface LocalFileVideoAwemeGetV30ResponseDataVideoListInner {
  aweme_id?: string;
  aweme_name?: string;
  aweme_video_url?: string;
  can_delivery?: boolean;
  cover_image_url?: string;
  duration: string;
  image_mode: LocalFileVideoAwemeGetV30DataVideoListImageMode;
  item_id: string;
  lego_material_id?: number | string;
  not_delivery_reason?: string[];
  quality_mark?: LocalFileVideoAwemeGetV30DataVideoListQualityMark;
  title: string;
  video_heigh?: number;
  video_id: string;
  video_width?: number;
}

