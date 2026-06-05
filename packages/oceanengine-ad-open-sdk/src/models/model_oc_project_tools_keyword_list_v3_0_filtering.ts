// 由 oceanengine/ad_open_sdk_go models/model_oc_project_tools_keyword_list_v3_0_filtering.go 生成
// 不要手动编辑。

import type { OcProjectToolsKeywordListV30FilteringFirstStatus, OcProjectToolsKeywordListV30FilteringSecondStatus } from "../models/index";

export interface OcProjectToolsKeywordListV30Filtering {
  first_status?: OcProjectToolsKeywordListV30FilteringFirstStatus;
  name?: string;
  project_id?: number | string;
  schedule_id?: number | string;
  second_status?: OcProjectToolsKeywordListV30FilteringSecondStatus;
  word?: string;
}

