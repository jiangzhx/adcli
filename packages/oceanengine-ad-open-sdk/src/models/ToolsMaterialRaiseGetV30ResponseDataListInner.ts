// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsMaterialRaiseGetV30DataListStatus, ToolsMaterialRaiseGetV30ResponseDataListInnerMaterialListInner, ToolsMaterialRaiseGetV30ResponseDataListInnerRaiseInfo } from "../models";

export interface ToolsMaterialRaiseGetV30ResponseDataListInner {
  material_ids?: number[];
  material_list?: ToolsMaterialRaiseGetV30ResponseDataListInnerMaterialListInner[];
  project_id?: number;
  raise_info?: ToolsMaterialRaiseGetV30ResponseDataListInnerRaiseInfo;
  schedule_id?: number;
  status?: ToolsMaterialRaiseGetV30DataListStatus;
}

