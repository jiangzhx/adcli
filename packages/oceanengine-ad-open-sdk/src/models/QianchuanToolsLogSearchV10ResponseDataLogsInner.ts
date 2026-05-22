// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanToolsLogSearchV10ResponseDataLogsInnerSubLogsInner } from "../models";

export interface QianchuanToolsLogSearchV10ResponseDataLogsInner {
  content_log?: string[];
  content_title?: string;
  create_time?: string;
  log_id?: string;
  object_id?: number | string;
  object_name?: string;
  object_type?: string;
  operator_id?: string;
  operator_name?: string;
  opt_ip?: string;
  sub_logs?: QianchuanToolsLogSearchV10ResponseDataLogsInnerSubLogsInner[];
}

