// Generated from oceanengine/ad_open_sdk_go models/model_file_video_material_clear_task_create_v2_request_clear_task_params.go
// Do not edit manually.

import type { FileVideoMaterialClearTaskCreateV2ClearTaskParamsClearMaterialTypes, FileVideoMaterialClearTaskCreateV2ClearTaskParamsMaterialSource } from "../models/index";

export interface FileVideoMaterialClearTaskCreateV2RequestClearTaskParams {
  clear_material_types?: FileVideoMaterialClearTaskCreateV2ClearTaskParamsClearMaterialTypes[];
  convert?: number;
  cost?: number;
  create_time_upper?: string;
  end_time?: string;
  material_ids?: (number | string)[];
  material_source: FileVideoMaterialClearTaskCreateV2ClearTaskParamsMaterialSource;
  start_time?: string;
}

