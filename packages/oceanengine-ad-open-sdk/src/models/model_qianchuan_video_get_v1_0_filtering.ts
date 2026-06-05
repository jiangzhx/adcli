// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_video_get_v1_0_filtering.go 生成
// 不要手动编辑。

import type { QianchuanVideoGetV10FilteringImageMode, QianchuanVideoGetV10FilteringSources } from "../models/index";

export interface QianchuanVideoGetV10Filtering {
  end_time?: string;
  image_mode?: QianchuanVideoGetV10FilteringImageMode[];
  material_ids?: (number | string)[];
  signatures?: string[];
  sources?: QianchuanVideoGetV10FilteringSources[];
  start_time?: string;
  tags?: string[];
  video_ids?: string[];
}

