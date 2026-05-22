// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { FinderCommentFlag, ReplyCommentInfoItem } from "../models";

export interface CommentListGetListStruct {
  comment_id?: string;
  content?: string;
  created_time?: number;
  comment_flag?: FinderCommentFlag;
  finder_ad_object_id?: number | string;
  author_replys?: ReplyCommentInfoItem[];
  comment_level?: number;
}

