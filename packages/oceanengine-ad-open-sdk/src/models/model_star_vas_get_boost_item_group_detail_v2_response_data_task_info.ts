// Generated from oceanengine/ad_open_sdk_go models/model_star_vas_get_boost_item_group_detail_v2_response_data_task_info.go
// Do not edit manually.

import type { StarVasGetBoostItemGroupDetailV2DataTaskInfoBidType, StarVasGetBoostItemGroupDetailV2DataTaskInfoBoostAction, StarVasGetBoostItemGroupDetailV2DataTaskInfoBoostType, StarVasGetBoostItemGroupDetailV2DataTaskInfoStatus } from "../models/index";

export interface StarVasGetBoostItemGroupDetailV2ResponseDataTaskInfo {
  bid_amount?: number;
  bid_type?: StarVasGetBoostItemGroupDetailV2DataTaskInfoBidType;
  boost_action: StarVasGetBoostItemGroupDetailV2DataTaskInfoBoostAction;
  boost_amount: number;
  boost_cost: number;
  boost_hours?: number;
  boost_type: StarVasGetBoostItemGroupDetailV2DataTaskInfoBoostType;
  create_time: number;
  pack_id?: number | string;
  status: StarVasGetBoostItemGroupDetailV2DataTaskInfoStatus;
  task_id: number | string;
  task_name: string;
}

