// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsClueLiteContactGetV2DataListCallDirection } from "../models";

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

