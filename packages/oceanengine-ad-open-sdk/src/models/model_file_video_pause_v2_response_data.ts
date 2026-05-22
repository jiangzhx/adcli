// Generated from oceanengine/ad_open_sdk_go models/model_file_video_pause_v2_response_data.go
// Do not edit manually.

import type { FileVideoPauseV2ResponseDataMaterialClearResultValue } from "../models/index";

export interface FileVideoPauseV2ResponseData {
  fail_material_ids?: number | string[];
  material_clear_result?: Record<string, FileVideoPauseV2ResponseDataMaterialClearResultValue>;
  status?: string;
}

