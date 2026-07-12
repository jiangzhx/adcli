// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_reply_comment_info_item.go
// Do not edit manually.

import type { FinderCommentContentType, FinderCommentFlag, ImageCommentInfo } from "../v3/index";

export interface ReplyCommentInfoItem {
  comment_id?: string;
  content?: string;
  created_time?: number;
  comment_flag?: FinderCommentFlag;
  comment_level?: number;
  content_type?: FinderCommentContentType;
  image_comment_info?: ImageCommentInfo;
}

