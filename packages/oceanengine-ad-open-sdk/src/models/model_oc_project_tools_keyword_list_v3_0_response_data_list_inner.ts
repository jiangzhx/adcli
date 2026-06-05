// 由 oceanengine/ad_open_sdk_go models/model_oc_project_tools_keyword_list_v3_0_response_data_list_inner.go 生成
// 不要手动编辑。

import type { OcProjectToolsKeywordListV30DataListFirstStatus, OcProjectToolsKeywordListV30DataListSecondStatus, OcProjectToolsKeywordListV30ResponseDataListInnerDeliverySetting, OcProjectToolsKeywordListV30ResponseDataListInnerKeywords } from "../models/index";

export interface OcProjectToolsKeywordListV30ResponseDataListInner {
  create_time?: string;
  delivery_setting?: OcProjectToolsKeywordListV30ResponseDataListInnerDeliverySetting;
  first_status?: OcProjectToolsKeywordListV30DataListFirstStatus;
  keywords?: OcProjectToolsKeywordListV30ResponseDataListInnerKeywords;
  name?: string;
  project_id?: number | string;
  schedule_id?: number | string;
  second_status?: OcProjectToolsKeywordListV30DataListSecondStatus[];
  update_time?: string;
}

