// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_comment_list_get_list_struct.go
// Do not edit manually.

import type { FinderCommentFlag, ReplyCommentInfoItem } from "../v3/index";

export interface CommentListGetListStruct {
  comment_id?: string;
  content?: string;
  created_time?: number;
  comment_flag?: FinderCommentFlag;
  finder_ad_object_id?: number | string;
  author_replys?: ReplyCommentInfoItem[];
  comment_level?: number;
}

