// 由 oceanengine/ad_open_sdk_go models/model_file_playable_list_v3_0_filtering.go 生成
// 不要手动编辑。

import type { FilePlayableListV30FilteringAuditStatus, FilePlayableListV30FilteringStatus } from "../models/index";

export interface FilePlayableListV30Filtering {
  app_ids?: string[];
  app_material_ids?: (number | string)[];
  audit_status?: FilePlayableListV30FilteringAuditStatus;
  end_time?: string;
  keyword?: string;
  material_ids?: (number | string)[];
  signatures?: string[];
  start_time?: string;
  status?: FilePlayableListV30FilteringStatus;
}

