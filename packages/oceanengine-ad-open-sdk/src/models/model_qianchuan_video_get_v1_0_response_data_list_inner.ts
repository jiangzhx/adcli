// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_video_get_v1_0_response_data_list_inner.go 生成
// 不要手动编辑。

import type { QianchuanVideoGetV10DataListImageMode, QianchuanVideoGetV10DataListSource } from "../models/index";

export interface QianchuanVideoGetV10ResponseDataListInner {
  bit_rate?: number;
  create_time?: string;
  duration?: number;
  filename?: string;
  format?: string;
  height?: number;
  id?: string;
  image_mode?: QianchuanVideoGetV10DataListImageMode;
  is_ai_create?: boolean;
  material_id?: number | string;
  poster_url?: string;
  signature?: string;
  size?: number;
  source?: QianchuanVideoGetV10DataListSource;
  tags?: string[];
  url?: string;
  width?: number;
}

