// Generated from oceanengine/ad_open_sdk_go models/model_file_video_material_clear_task_get_v2_response_data_list_inner_clear_task_params.go
// Do not edit manually.

import type { FileVideoMaterialClearTaskGetV2DataListClearTaskParamsClearMaterialTypes, FileVideoMaterialClearTaskGetV2DataListClearTaskParamsMaterialSource } from "../models/index";

export interface FileVideoMaterialClearTaskGetV2ResponseDataListInnerClearTaskParams {
  clear_material_types?: FileVideoMaterialClearTaskGetV2DataListClearTaskParamsClearMaterialTypes[];
  convert?: number;
  cost?: number;
  create_time_upper?: string;
  end_time?: string;
  material_ids?: number | string[];
  material_source?: FileVideoMaterialClearTaskGetV2DataListClearTaskParamsMaterialSource;
  start_time?: string;
}

