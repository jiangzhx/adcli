// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { FileVideoMaterialClearTaskCreateV2ClearTaskParamsClearMaterialTypes, FileVideoMaterialClearTaskCreateV2ClearTaskParamsMaterialSource } from "../models";

export interface FileVideoMaterialClearTaskCreateV2RequestClearTaskParams {
  clear_material_types?: FileVideoMaterialClearTaskCreateV2ClearTaskParamsClearMaterialTypes[];
  convert?: number;
  cost?: number;
  create_time_upper?: string;
  end_time?: string;
  material_ids?: number[];
  material_source: FileVideoMaterialClearTaskCreateV2ClearTaskParamsMaterialSource;
  start_time?: string;
}

