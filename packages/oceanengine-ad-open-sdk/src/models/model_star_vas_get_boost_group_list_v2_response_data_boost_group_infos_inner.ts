// Generated from oceanengine/ad_open_sdk_go models/model_star_vas_get_boost_group_list_v2_response_data_boost_group_infos_inner.go
// Do not edit manually.

import type { StarVasGetBoostGroupListV2DataBoostGroupInfosBidType, StarVasGetBoostGroupListV2DataBoostGroupInfosBoostAction, StarVasGetBoostGroupListV2DataBoostGroupInfosBoostType, StarVasGetBoostGroupListV2DataBoostGroupInfosStatus, StarVasGetBoostGroupListV2ResponseDataBoostGroupInfosInnerTaskInfosInner } from "../models/index";

export interface StarVasGetBoostGroupListV2ResponseDataBoostGroupInfosInner {
  bid_amount?: number;
  bid_type?: StarVasGetBoostGroupListV2DataBoostGroupInfosBidType;
  boost_action: StarVasGetBoostGroupListV2DataBoostGroupInfosBoostAction;
  boost_amount: number;
  boost_cost: number;
  boost_hours?: number;
  boost_type: StarVasGetBoostGroupListV2DataBoostGroupInfosBoostType;
  create_time: number;
  pack_id?: number | string;
  status: StarVasGetBoostGroupListV2DataBoostGroupInfosStatus;
  task_id: number | string;
  task_infos: StarVasGetBoostGroupListV2ResponseDataBoostGroupInfosInnerTaskInfosInner[];
  task_name: string;
}

