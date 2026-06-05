// 由 oceanengine/ad_open_sdk_go models/model_oc_project_material_status_update_v3_0_response_data.go 生成
// 不要手动编辑。

import type { OcProjectMaterialStatusUpdateV30ResponseDataErrorsInner } from "../models/index";

export interface OcProjectMaterialStatusUpdateV30ResponseData {
  errors?: OcProjectMaterialStatusUpdateV30ResponseDataErrorsInner[];
  material_ids?: (number | string)[];
  project_id?: number | string;
}

