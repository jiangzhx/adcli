// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_object_comment_flag_update_request.go
// Do not edit manually.

import type { SetObjectCommentFlagOpType } from "../v3/index";

export interface ObjectCommentFlagUpdateRequest {
  account_id?: number | string;
  finder_ad_object_id?: number | string;
  op_type?: SetObjectCommentFlagOpType;
  comment_id?: string;
  comment_level?: number;
}

