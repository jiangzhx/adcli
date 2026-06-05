// 由 oceanengine/ad_open_sdk_go models/model_tools_clue_lite_contact_get_v2_response_data_list_inner.go 生成
// 不要手动编辑。

import type { ToolsClueLiteContactGetV2DataListCallDirection } from "../models/index";

export interface ToolsClueLiteContactGetV2ResponseDataListInner {
  call_direction?: ToolsClueLiteContactGetV2DataListCallDirection;
  call_duration?: number;
  callee_number?: string;
  caller_number?: string;
  clue_id?: number | string;
  contact_id?: string;
  duration?: number;
  end_state_show_code?: number;
  end_state_show_msg?: string;
  end_time?: string;
  start_time?: string;
  virtual_number?: string;
}

