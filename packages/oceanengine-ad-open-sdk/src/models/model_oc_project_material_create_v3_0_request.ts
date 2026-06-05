// 由 oceanengine/ad_open_sdk_go models/model_oc_project_material_create_v3_0_request.go 生成
// 不要手动编辑。

import type { OcProjectMaterialCreateV30RequestCarouselMaterialListInner, OcProjectMaterialCreateV30RequestImageMaterialListInner, OcProjectMaterialCreateV30RequestTitleMaterialListInner, OcProjectMaterialCreateV30RequestTrialPlayMaterialListInner, OcProjectMaterialCreateV30RequestVideoMaterialListInner } from "../models/index";

export interface OcProjectMaterialCreateV30Request {
  advertiser_id: number | string;
  carousel_material_list?: OcProjectMaterialCreateV30RequestCarouselMaterialListInner[];
  image_material_list?: OcProjectMaterialCreateV30RequestImageMaterialListInner[];
  project_id: number | string;
  title_material_list?: OcProjectMaterialCreateV30RequestTitleMaterialListInner[];
  trial_play_material_list?: OcProjectMaterialCreateV30RequestTrialPlayMaterialListInner[];
  video_material_list?: OcProjectMaterialCreateV30RequestVideoMaterialListInner[];
}

