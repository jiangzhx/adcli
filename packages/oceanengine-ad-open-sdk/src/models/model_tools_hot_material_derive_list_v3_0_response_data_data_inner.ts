// Generated from oceanengine/ad_open_sdk_go models/model_tools_hot_material_derive_list_v3_0_response_data_data_inner.go
// Do not edit manually.

import type { ToolsHotMaterialDeriveListV30DataDataStatus, ToolsHotMaterialDeriveListV30ResponseDataDataInnerDeriveMaterialsInner } from "../models/index";

export interface ToolsHotMaterialDeriveListV30ResponseDataDataInner {
  create_time?: string;
  derive_materials?: ToolsHotMaterialDeriveListV30ResponseDataDataInnerDeriveMaterialsInner[];
  modify_time?: string;
  origin_material_id: number | string;
  status: ToolsHotMaterialDeriveListV30DataDataStatus;
  status_code?: number;
  status_message?: string;
  task_id: number | string;
}

