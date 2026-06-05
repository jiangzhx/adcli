// 由 oceanengine/ad_open_sdk_go models/model_oc_project_tools_material_raise_create_v3_0_request.go 生成
// 不要手动编辑。

import type { OcProjectToolsMaterialRaiseCreateV30MaterialsType, OcProjectToolsMaterialRaiseCreateV30RequestRaiseInfo } from "../models/index";

export interface OcProjectToolsMaterialRaiseCreateV30Request {
  advertiser_id: number | string;
  material_ids?: (number | string)[];
  materials_type: OcProjectToolsMaterialRaiseCreateV30MaterialsType;
  project_id: number | string;
  raise_info: OcProjectToolsMaterialRaiseCreateV30RequestRaiseInfo;
}

