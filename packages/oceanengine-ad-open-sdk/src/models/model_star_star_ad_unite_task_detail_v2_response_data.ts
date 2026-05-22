// Generated from oceanengine/ad_open_sdk_go models/model_star_star_ad_unite_task_detail_v2_response_data.go
// Do not edit manually.

import type { StarStarAdUniteTaskDetailV2DataAuditStatus, StarStarAdUniteTaskDetailV2DataEvaluateType, StarStarAdUniteTaskDetailV2DataStatus, StarStarAdUniteTaskDetailV2ResponseDataStatInfoInner } from "../models/index";

export interface StarStarAdUniteTaskDetailV2ResponseData {
  audit_status: StarStarAdUniteTaskDetailV2DataAuditStatus;
  budget: number;
  demand_id: number | string;
  evaluate_type: StarStarAdUniteTaskDetailV2DataEvaluateType;
  star_id: number | string;
  stat_info: StarStarAdUniteTaskDetailV2ResponseDataStatInfoInner[];
  status: StarStarAdUniteTaskDetailV2DataStatus;
  week_schedule?: number[][];
}

