// Generated from oceanengine/ad_open_sdk_go models/model_file_video_agent_get_v2_filtering.go
// Do not edit manually.

import type { FileVideoAgentGetV2FilteringSource } from "../models/index";

export interface FileVideoAgentGetV2Filtering {
  end_time?: string;
  material_ids?: number | string[];
  signatures?: string[];
  source?: FileVideoAgentGetV2FilteringSource[];
  start_time?: string;
  video_ids?: string[];
}

