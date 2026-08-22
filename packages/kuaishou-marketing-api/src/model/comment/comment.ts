// Generated from github.com/bububa/kwai-marketing-api/model/comment/comment.go
// Do not edit manually.

import type { KuaishouId } from "../types";

export interface Comment {
  comment_id?: KuaishouId;
  root_comment_id?: KuaishouId;
  comment_author_id?: KuaishouId;
  photo_id?: KuaishouId;
  photo_author_id?: KuaishouId;
  comment_level?: number;
  comment_content?: string;
  fav_num?: number;
  post_time?: number;
  nick_name?: string;
  reply_status?: number;
  shield_status?: number;
  photo_tags?: string[];
  is_root_comment_forbid?: boolean;
  shield_type?: number;
  emotion_url?: string;
  is_top_comment?: boolean;
}

export interface CommentReply {
  reply_to_comment_id?: KuaishouId;
  photo_id?: KuaishouId;
  photo_author_id?: KuaishouId;
  reply_to_user_id?: KuaishouId;
  reply_content?: string;
}
