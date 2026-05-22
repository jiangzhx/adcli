// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StarStarAdUniteTaskDetailV2DataAuditStatus, StarStarAdUniteTaskDetailV2DataEvaluateType, StarStarAdUniteTaskDetailV2DataStatus, StarStarAdUniteTaskDetailV2ResponseDataStatInfoInner } from "../models";

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

