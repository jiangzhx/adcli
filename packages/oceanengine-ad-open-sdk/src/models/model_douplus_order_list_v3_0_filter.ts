// Generated from oceanengine/ad_open_sdk_go models/model_douplus_order_list_v3_0_filter.go
// Do not edit manually.

import type { DouplusOrderListV30FilterOrderCreateTime, DouplusOrderListV30FilterSceneType, DouplusOrderListV30FilterStatus } from "../models/index";

export interface DouplusOrderListV30Filter {
  order_create_time?: DouplusOrderListV30FilterOrderCreateTime;
  order_id?: number | string[];
  scene_type?: DouplusOrderListV30FilterSceneType;
  status?: DouplusOrderListV30FilterStatus[];
  task_id?: number | string[];
}

