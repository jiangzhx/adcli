// Generated from oceanengine/ad_open_sdk_go models/model_tools_comment_reply_get_v3_0_response_data_reply_list_inner.go
// Do not edit manually.

import type { ToolsCommentReplyGetV30DataReplyListHideStatus } from "../models/index";

export interface ToolsCommentReplyGetV30ResponseDataReplyListInner {
  aweme_id?: string;
  aweme_name?: string;
  comment_id?: number | string;
  create_time: string;
  hide_status?: ToolsCommentReplyGetV30DataReplyListHideStatus;
  is_stick?: number;
  item_id?: number | string;
  like_count?: number;
  text?: string;
}

