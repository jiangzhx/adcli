// 由 oceanengine/ad_open_sdk_go models/model_oc_project_tools_material_raise_get_v3_0_response_data_list_inner.go 生成
// 不要手动编辑。

import type { OcProjectToolsMaterialRaiseGetV30DataListMaterialAdjustStatusFirst, OcProjectToolsMaterialRaiseGetV30DataListMaterialAdjustStatusSecond, OcProjectToolsMaterialRaiseGetV30DataListMaterialsType, OcProjectToolsMaterialRaiseGetV30ResponseDataListInnerRaiseInfo } from "../models/index";

export interface OcProjectToolsMaterialRaiseGetV30ResponseDataListInner {
  material_adjust_status_first?: OcProjectToolsMaterialRaiseGetV30DataListMaterialAdjustStatusFirst;
  material_adjust_status_second?: OcProjectToolsMaterialRaiseGetV30DataListMaterialAdjustStatusSecond[];
  material_ids?: (number | string)[];
  materials_type?: OcProjectToolsMaterialRaiseGetV30DataListMaterialsType;
  project_id?: number | string;
  raise_info?: OcProjectToolsMaterialRaiseGetV30ResponseDataListInnerRaiseInfo;
  schedule_id?: number | string;
}

