// 由 oceanengine/ad_open_sdk_go models/model_oc_project_tools_material_raise_get_v3_0_filtering.go 生成
// 不要手动编辑。

import type { OcProjectToolsMaterialRaiseGetV30FilteringMaterialAdjustStatusFirst, OcProjectToolsMaterialRaiseGetV30FilteringMaterialAdjustStatusSecond } from "../models/index";

export interface OcProjectToolsMaterialRaiseGetV30Filtering {
  material_adjust_status_first?: OcProjectToolsMaterialRaiseGetV30FilteringMaterialAdjustStatusFirst;
  material_adjust_status_second?: OcProjectToolsMaterialRaiseGetV30FilteringMaterialAdjustStatusSecond;
  name?: string;
  project_id: number | string;
  schedule_id?: string;
}

