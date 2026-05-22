// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { OcProjectMaterialGetV30DataVideoMaterialListMaterialStatusFrist, OcProjectMaterialGetV30DataVideoMaterialListMaterialStatusSecond } from "../models";

export interface OcProjectMaterialGetV30ResponseDataVideoMaterialListInner {
  material_id?: number;
  material_opt_status?: string;
  material_status_frist?: OcProjectMaterialGetV30DataVideoMaterialListMaterialStatusFrist;
  material_status_second?: OcProjectMaterialGetV30DataVideoMaterialListMaterialStatusSecond[];
  video_cover_uri?: string;
  video_id?: string;
}

