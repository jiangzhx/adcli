// 由 oceanengine/ad_open_sdk_go models/model_oc_project_reject_reason_get_v3_0_response_data_list_inner.go 生成
// 不要手动编辑。

import type { OcProjectRejectReasonGetV30ResponseDataListInnerMaterialRejectInner, OcProjectRejectReasonGetV30ResponseDataListInnerProjectRejectInner } from "../models/index";

export interface OcProjectRejectReasonGetV30ResponseDataListInner {
  material_reject?: OcProjectRejectReasonGetV30ResponseDataListInnerMaterialRejectInner[];
  project_id?: number | string;
  project_reject?: OcProjectRejectReasonGetV30ResponseDataListInnerProjectRejectInner[];
}

