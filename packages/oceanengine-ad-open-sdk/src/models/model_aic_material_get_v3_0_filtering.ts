// 由 oceanengine/ad_open_sdk_go models/model_aic_material_get_v3_0_filtering.go 生成
// 不要手动编辑。

import type { AicMaterialGetV30FilteringRadio } from "../models/index";

export interface AicMaterialGetV30Filtering {
  create_end_time?: string;
  create_start_time?: string;
  material_name?: string;
  radio?: AicMaterialGetV30FilteringRadio;
  video_ids?: string[];
}

