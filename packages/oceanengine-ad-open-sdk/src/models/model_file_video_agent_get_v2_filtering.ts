// 由 oceanengine/ad_open_sdk_go models/model_file_video_agent_get_v2_filtering.go 生成
// 不要手动编辑。

import type { FileVideoAgentGetV2FilteringSource } from "../models/index";

export interface FileVideoAgentGetV2Filtering {
  end_time?: string;
  material_ids?: (number | string)[];
  signatures?: string[];
  source?: FileVideoAgentGetV2FilteringSource[];
  start_time?: string;
  video_ids?: string[];
}

