// 由 oceanengine/ad_open_sdk_go models/model_tools_material_raise_records_get_v3_0_response_data_list_inner.go 生成
// 不要手动编辑。

import type { ToolsMaterialRaiseRecordsGetV30DataListStatus, ToolsMaterialRaiseRecordsGetV30ResponseDataListInnerRaiseInfo } from "../models/index";

export interface ToolsMaterialRaiseRecordsGetV30ResponseDataListInner {
  project_id?: number | string;
  raise_info?: ToolsMaterialRaiseRecordsGetV30ResponseDataListInnerRaiseInfo;
  record_id?: number | string;
  status?: ToolsMaterialRaiseRecordsGetV30DataListStatus;
  version?: number;
}

