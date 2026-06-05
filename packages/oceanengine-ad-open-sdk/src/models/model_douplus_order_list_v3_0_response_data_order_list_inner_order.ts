// 由 oceanengine/ad_open_sdk_go models/model_douplus_order_list_v3_0_response_data_order_list_inner_order.go 生成
// 不要手动编辑。

import type { DouplusOrderListV30DataOrderListOrderLiveScene, DouplusOrderListV30DataOrderListOrderSceneType, DouplusOrderListV30DataOrderListOrderTaskStatus } from "../models/index";

export interface DouplusOrderListV30ResponseDataOrderListInnerOrder {
  budget?: number;
  live_scene?: DouplusOrderListV30DataOrderListOrderLiveScene;
  order_create_time?: string;
  order_id?: number | string;
  renew_count?: number;
  rta_id?: number | string;
  scene_type?: DouplusOrderListV30DataOrderListOrderSceneType;
  task_id?: number | string;
  task_status?: DouplusOrderListV30DataOrderListOrderTaskStatus;
}

