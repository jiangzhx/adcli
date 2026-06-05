// 由 oceanengine/ad_open_sdk_go models/model_oc_project_material_status_update_v3_0_request.go 生成
// 不要手动编辑。

import type { OcProjectMaterialStatusUpdateV30RequestDataInner } from "../models/index";

export interface OcProjectMaterialStatusUpdateV30Request {
  advertiser_id: number | string;
  data: OcProjectMaterialStatusUpdateV30RequestDataInner[];
  project_id: number | string;
}

