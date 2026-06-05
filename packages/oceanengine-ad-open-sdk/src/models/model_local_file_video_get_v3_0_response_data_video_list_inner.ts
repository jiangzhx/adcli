// 由 oceanengine/ad_open_sdk_go models/model_local_file_video_get_v3_0_response_data_video_list_inner.go 生成
// 不要手动编辑。

import type { LocalFileVideoGetV30DataVideoListImageMode, LocalFileVideoGetV30DataVideoListMaterialProperties, LocalFileVideoGetV30DataVideoListSource } from "../models/index";

export interface LocalFileVideoGetV30ResponseDataVideoListInner {
  create_time?: string;
  duration?: number;
  image_mode?: LocalFileVideoGetV30DataVideoListImageMode;
  material_id?: number | string;
  material_properties?: LocalFileVideoGetV30DataVideoListMaterialProperties[];
  poster_url?: string;
  signature?: string;
  source?: LocalFileVideoGetV30DataVideoListSource;
  video_id?: string;
  video_name?: string;
  video_url?: string;
}

