// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsCommentGetV30FilteringCommentType, ToolsCommentGetV30FilteringEmotionType, ToolsCommentGetV30FilteringHideStatus, ToolsCommentGetV30FilteringLevelType } from "../models";

export interface ToolsCommentGetV30Filtering {
  ad_ids?: number[];
  author_ids?: number[];
  comment_type?: ToolsCommentGetV30FilteringCommentType;
  content?: string;
  emotion_type?: ToolsCommentGetV30FilteringEmotionType;
  hide_status?: ToolsCommentGetV30FilteringHideStatus;
  is_replied?: number;
  item_ids?: number[];
  level_type?: ToolsCommentGetV30FilteringLevelType;
}

