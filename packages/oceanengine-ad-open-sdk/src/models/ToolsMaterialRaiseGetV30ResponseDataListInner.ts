// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsMaterialRaiseGetV30DataListStatus, ToolsMaterialRaiseGetV30ResponseDataListInnerMaterialListInner, ToolsMaterialRaiseGetV30ResponseDataListInnerRaiseInfo } from "../models";

export interface ToolsMaterialRaiseGetV30ResponseDataListInner {
  material_ids?: number | string[];
  material_list?: ToolsMaterialRaiseGetV30ResponseDataListInnerMaterialListInner[];
  project_id?: number | string;
  raise_info?: ToolsMaterialRaiseGetV30ResponseDataListInnerRaiseInfo;
  schedule_id?: number | string;
  status?: ToolsMaterialRaiseGetV30DataListStatus;
}

