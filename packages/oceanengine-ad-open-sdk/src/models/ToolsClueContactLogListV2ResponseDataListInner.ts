// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsClueContactLogListV2DataListCallDirection } from "../models";

export interface ToolsClueContactLogListV2ResponseDataListInner {
  agent_id?: string;
  call_direction?: ToolsClueContactLogListV2DataListCallDirection;
  call_duration?: number;
  callee_number?: string;
  caller_number?: string;
  clue_id?: number | string;
  contact_id?: string;
  contact_type?: number;
  duration?: number;
  end_state_show_code?: number;
  end_state_show_msg?: string;
  end_time?: string;
  start_time?: string;
  user_id?: number | string;
  virtual_number?: string;
}

