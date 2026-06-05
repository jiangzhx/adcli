// 由 oceanengine/ad_open_sdk_go models/model_uni_project_create_v3_0_request_video_material_list_inner.go 生成
// 不要手动编辑。

import type { UniProjectCreateV30VideoMaterialListImageMode, UniProjectCreateV30VideoMaterialListVideoHpVisibility } from "../models/index";

export interface UniProjectCreateV30RequestVideoMaterialListInner {
  image_mode: UniProjectCreateV30VideoMaterialListImageMode;
  item_id?: number | string;
  video_cover_id?: string;
  video_hp_visibility?: UniProjectCreateV30VideoMaterialListVideoHpVisibility;
  video_id?: string;
}

