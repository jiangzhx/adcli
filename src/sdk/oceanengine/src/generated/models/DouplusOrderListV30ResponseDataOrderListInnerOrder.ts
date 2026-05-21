// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { DouplusOrderListV30DataOrderListOrderLiveScene, DouplusOrderListV30DataOrderListOrderSceneType, DouplusOrderListV30DataOrderListOrderTaskStatus } from "../models";

export interface DouplusOrderListV30ResponseDataOrderListInnerOrder {
  budget?: number;
  live_scene?: DouplusOrderListV30DataOrderListOrderLiveScene;
  order_create_time?: string;
  order_id?: number;
  renew_count?: number;
  rta_id?: number;
  scene_type?: DouplusOrderListV30DataOrderListOrderSceneType;
  task_id?: number;
  task_status?: DouplusOrderListV30DataOrderListOrderTaskStatus;
}

