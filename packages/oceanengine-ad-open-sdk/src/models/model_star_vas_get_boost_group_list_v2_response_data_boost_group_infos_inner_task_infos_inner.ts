// Generated from oceanengine/ad_open_sdk_go models/model_star_vas_get_boost_group_list_v2_response_data_boost_group_infos_inner_task_infos_inner.go
// Do not edit manually.

import type { StarVasGetBoostGroupListV2DataBoostGroupInfosTaskInfosAuditStatus } from "../models/index";

export interface StarVasGetBoostGroupListV2ResponseDataBoostGroupInfosInnerTaskInfosInner {
  audit_status: StarVasGetBoostGroupListV2DataBoostGroupInfosTaskInfosAuditStatus;
  author_id: number | string;
  author_name: string;
  item_id?: number | string;
  item_name: string;
  order_id: number | string;
  order_name: string;
}

