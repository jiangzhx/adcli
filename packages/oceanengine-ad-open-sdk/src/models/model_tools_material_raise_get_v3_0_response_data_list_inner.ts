// Generated from oceanengine/ad_open_sdk_go models/model_tools_material_raise_get_v3_0_response_data_list_inner.go
// Do not edit manually.

import type { ToolsMaterialRaiseGetV30DataListStatus, ToolsMaterialRaiseGetV30ResponseDataListInnerMaterialListInner, ToolsMaterialRaiseGetV30ResponseDataListInnerRaiseInfo } from "../models/index";

export interface ToolsMaterialRaiseGetV30ResponseDataListInner {
  material_ids?: (number | string)[];
  material_list?: ToolsMaterialRaiseGetV30ResponseDataListInnerMaterialListInner[];
  project_id?: number | string;
  raise_info?: ToolsMaterialRaiseGetV30ResponseDataListInnerRaiseInfo;
  schedule_id?: number | string;
  status?: ToolsMaterialRaiseGetV30DataListStatus;
}

