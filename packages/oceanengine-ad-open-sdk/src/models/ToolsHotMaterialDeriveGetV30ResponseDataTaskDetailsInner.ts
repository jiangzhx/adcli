// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsHotMaterialDeriveGetV30DataTaskDetailsStatus, ToolsHotMaterialDeriveGetV30ResponseDataTaskDetailsInnerDeriveMaterialsInner } from "../models";

export interface ToolsHotMaterialDeriveGetV30ResponseDataTaskDetailsInner {
  derive_materials?: ToolsHotMaterialDeriveGetV30ResponseDataTaskDetailsInnerDeriveMaterialsInner[];
  origin_material_id: number;
  status: ToolsHotMaterialDeriveGetV30DataTaskDetailsStatus;
  status_code?: number;
  status_message?: string;
  task_id: number;
}

