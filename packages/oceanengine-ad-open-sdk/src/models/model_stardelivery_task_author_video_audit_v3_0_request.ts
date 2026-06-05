// 由 oceanengine/ad_open_sdk_go models/model_stardelivery_task_author_video_audit_v3_0_request.go 生成
// 不要手动编辑。

import type { StardeliveryTaskAuthorVideoAuditV30OptStatus } from "../models/index";

export interface StardeliveryTaskAuthorVideoAuditV30Request {
  advertiser_id: number | string;
  ban_reason?: string;
  material_id: number | string;
  opt_status: StardeliveryTaskAuthorVideoAuditV30OptStatus;
  star_task_id: number | string;
}

