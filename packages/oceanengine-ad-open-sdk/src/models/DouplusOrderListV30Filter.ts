// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { DouplusOrderListV30FilterOrderCreateTime, DouplusOrderListV30FilterSceneType, DouplusOrderListV30FilterStatus } from "../models";

export interface DouplusOrderListV30Filter {
  order_create_time?: DouplusOrderListV30FilterOrderCreateTime;
  order_id?: number[];
  scene_type?: DouplusOrderListV30FilterSceneType;
  status?: DouplusOrderListV30FilterStatus[];
  task_id?: number[];
}

