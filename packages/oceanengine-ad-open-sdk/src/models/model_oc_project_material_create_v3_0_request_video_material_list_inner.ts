// 由 oceanengine/ad_open_sdk_go models/model_oc_project_material_create_v3_0_request_video_material_list_inner.go 生成
// 不要手动编辑。

import type { OcProjectMaterialCreateV30VideoMaterialListImageMode, OcProjectMaterialCreateV30VideoMaterialListVideoHpVisibility } from "../models/index";

export interface OcProjectMaterialCreateV30RequestVideoMaterialListInner {
  guide_video_id?: string;
  image_mode?: OcProjectMaterialCreateV30VideoMaterialListImageMode;
  item_id?: number | string;
  video_cover_id?: string;
  video_hp_visibility?: OcProjectMaterialCreateV30VideoMaterialListVideoHpVisibility;
  video_id?: string;
}

