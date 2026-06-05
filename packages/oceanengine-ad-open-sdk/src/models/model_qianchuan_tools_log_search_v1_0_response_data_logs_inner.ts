// 由 oceanengine/ad_open_sdk_go models/model_qianchuan_tools_log_search_v1_0_response_data_logs_inner.go 生成
// 不要手动编辑。

import type { QianchuanToolsLogSearchV10ResponseDataLogsInnerSubLogsInner } from "../models/index";

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

