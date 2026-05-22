// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StarVasGetBoostItemGroupDetailV2DataTaskInfoBidType, StarVasGetBoostItemGroupDetailV2DataTaskInfoBoostAction, StarVasGetBoostItemGroupDetailV2DataTaskInfoBoostType, StarVasGetBoostItemGroupDetailV2DataTaskInfoStatus } from "../models";

export interface StarVasGetBoostItemGroupDetailV2ResponseDataTaskInfo {
  bid_amount?: number;
  bid_type?: StarVasGetBoostItemGroupDetailV2DataTaskInfoBidType;
  boost_action: StarVasGetBoostItemGroupDetailV2DataTaskInfoBoostAction;
  boost_amount: number;
  boost_cost: number;
  boost_hours?: number;
  boost_type: StarVasGetBoostItemGroupDetailV2DataTaskInfoBoostType;
  create_time: number;
  pack_id?: number;
  status: StarVasGetBoostItemGroupDetailV2DataTaskInfoStatus;
  task_id: number;
  task_name: string;
}

