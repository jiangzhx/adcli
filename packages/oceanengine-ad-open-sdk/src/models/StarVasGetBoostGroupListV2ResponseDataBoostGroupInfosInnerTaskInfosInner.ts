// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { StarVasGetBoostGroupListV2DataBoostGroupInfosTaskInfosAuditStatus } from "../models";

export interface StarVasGetBoostGroupListV2ResponseDataBoostGroupInfosInnerTaskInfosInner {
  audit_status: StarVasGetBoostGroupListV2DataBoostGroupInfosTaskInfosAuditStatus;
  author_id: number | string;
  author_name: string;
  item_id?: number | string;
  item_name: string;
  order_id: number | string;
  order_name: string;
}

