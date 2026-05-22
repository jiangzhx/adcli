// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsCommentGetV30DataCommentListCommentPermission, ToolsCommentGetV30DataCommentListCommentType, ToolsCommentGetV30DataCommentListEmotionType, ToolsCommentGetV30DataCommentListHideStatus, ToolsCommentGetV30DataCommentListLevelType } from "../models";

export interface ToolsCommentGetV30ResponseDataCommentListInner {
  aweme_id?: string;
  aweme_name?: string;
  comment_id?: number;
  comment_images?: string[];
  comment_permission?: ToolsCommentGetV30DataCommentListCommentPermission;
  comment_type?: ToolsCommentGetV30DataCommentListCommentType;
  create_time?: string;
  emotion_type?: ToolsCommentGetV30DataCommentListEmotionType;
  hide_status?: ToolsCommentGetV30DataCommentListHideStatus;
  is_stick?: number;
  item_id?: number;
  item_title?: string;
  level_type?: ToolsCommentGetV30DataCommentListLevelType;
  like_count?: number;
  material_id?: number;
  promotion_id?: number;
  reply_count?: number;
  text?: string;
}

