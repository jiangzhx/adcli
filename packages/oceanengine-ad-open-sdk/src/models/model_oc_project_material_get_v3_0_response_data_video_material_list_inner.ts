// Generated from oceanengine/ad_open_sdk_go models/model_oc_project_material_get_v3_0_response_data_video_material_list_inner.go
// Do not edit manually.

import type { OcProjectMaterialGetV30DataVideoMaterialListMaterialStatusFrist, OcProjectMaterialGetV30DataVideoMaterialListMaterialStatusSecond } from "../models/index";

export interface OcProjectMaterialGetV30ResponseDataVideoMaterialListInner {
  material_id?: number | string;
  material_opt_status?: string;
  material_status_frist?: OcProjectMaterialGetV30DataVideoMaterialListMaterialStatusFrist;
  material_status_second?: OcProjectMaterialGetV30DataVideoMaterialListMaterialStatusSecond[];
  video_cover_uri?: string;
  video_id?: string;
}

