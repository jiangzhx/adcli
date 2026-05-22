// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsHotMaterialDeriveListV30DataDataStatus, ToolsHotMaterialDeriveListV30ResponseDataDataInnerDeriveMaterialsInner } from "../models";

export interface ToolsHotMaterialDeriveListV30ResponseDataDataInner {
  create_time?: string;
  derive_materials?: ToolsHotMaterialDeriveListV30ResponseDataDataInnerDeriveMaterialsInner[];
  modify_time?: string;
  origin_material_id: number;
  status: ToolsHotMaterialDeriveListV30DataDataStatus;
  status_code?: number;
  status_message?: string;
  task_id: number;
}

