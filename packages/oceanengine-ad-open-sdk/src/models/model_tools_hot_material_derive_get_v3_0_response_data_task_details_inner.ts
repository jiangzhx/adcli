// 由 oceanengine/ad_open_sdk_go models/model_tools_hot_material_derive_get_v3_0_response_data_task_details_inner.go 生成
// 不要手动编辑。

import type { ToolsHotMaterialDeriveGetV30DataTaskDetailsStatus, ToolsHotMaterialDeriveGetV30ResponseDataTaskDetailsInnerDeriveMaterialsInner } from "../models/index";

export interface ToolsHotMaterialDeriveGetV30ResponseDataTaskDetailsInner {
  derive_materials?: ToolsHotMaterialDeriveGetV30ResponseDataTaskDetailsInnerDeriveMaterialsInner[];
  origin_material_id: number | string;
  status: ToolsHotMaterialDeriveGetV30DataTaskDetailsStatus;
  status_code?: number;
  status_message?: string;
  task_id: number | string;
}

