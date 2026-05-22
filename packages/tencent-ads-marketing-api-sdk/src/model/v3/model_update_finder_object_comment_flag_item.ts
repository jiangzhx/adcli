// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_update_finder_object_comment_flag_item.go
// Do not edit manually.

import type { SetObjectCommentFlagOpType } from "../v3/index";

export interface UpdateFinderObjectCommentFlagItem {
  finder_ad_object_id?: number | string;
  op_type?: SetObjectCommentFlagOpType;
  account_id?: number | string;
  comment_id?: string;
  comment_level?: number;
}

