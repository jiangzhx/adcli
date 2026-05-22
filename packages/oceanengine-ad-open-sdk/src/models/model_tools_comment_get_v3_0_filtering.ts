// Generated from oceanengine/ad_open_sdk_go models/model_tools_comment_get_v3_0_filtering.go
// Do not edit manually.

import type { ToolsCommentGetV30FilteringCommentType, ToolsCommentGetV30FilteringEmotionType, ToolsCommentGetV30FilteringHideStatus, ToolsCommentGetV30FilteringLevelType } from "../models/index";

export interface ToolsCommentGetV30Filtering {
  ad_ids?: (number | string)[];
  author_ids?: (number | string)[];
  comment_type?: ToolsCommentGetV30FilteringCommentType;
  content?: string;
  emotion_type?: ToolsCommentGetV30FilteringEmotionType;
  hide_status?: ToolsCommentGetV30FilteringHideStatus;
  is_replied?: number;
  item_ids?: (number | string)[];
  level_type?: ToolsCommentGetV30FilteringLevelType;
}

