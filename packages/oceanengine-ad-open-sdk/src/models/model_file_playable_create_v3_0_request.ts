// 由 oceanengine/ad_open_sdk_go models/model_file_playable_create_v3_0_request.go 生成
// 不要手动编辑。

import type { FilePlayableCreateV30MaterialType } from "../models/index";

export interface FilePlayableCreateV30Request {
  advertiser_id: number | string;
  app_id?: string;
  app_material_id: number | string;
  material_type: FilePlayableCreateV30MaterialType;
}

