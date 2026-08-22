// Generated from github.com/bububa/kwai-marketing-api/model/comment/list.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";
import type { Comment } from "./comment";

export interface ListRequestInit {
  advertiser_id?: KuaishouId;
  comment_content?: string;
  reply_status?: number;
  comment_level?: number;
  post_time_start?: number;
  post_time_end?: number;
  shield_status?: number;
  photo_query_value?: string;
  photo_tag?: string;
  page?: number;
  page_size?: number;
}

export class ListRequest implements PostRequest, ListRequestInit {
  advertiser_id?: KuaishouId;
  comment_content?: string;
  reply_status?: number;
  comment_level?: number;
  post_time_start?: number;
  post_time_end?: number;
  shield_status?: number;
  photo_query_value?: string;
  photo_tag?: string;
  page?: number;
  page_size?: number;

  constructor(init: ListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.comment_content = init.comment_content;
    this.reply_status = init.reply_status;
    this.comment_level = init.comment_level;
    this.post_time_start = init.post_time_start;
    this.post_time_end = init.post_time_end;
    this.shield_status = init.shield_status;
    this.photo_query_value = init.photo_query_value;
    this.photo_tag = init.photo_tag;
    this.page = init.page;
    this.page_size = init.page_size;
  }

  path() {
    return "v1/comment/list";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      comment_content: this.comment_content,
      reply_status: this.reply_status,
      comment_level: this.comment_level,
      post_time_start: this.post_time_start,
      post_time_end: this.post_time_end,
      shield_status: this.shield_status,
      photo_query_value: this.photo_query_value,
      photo_tag: this.photo_tag,
      page: this.page,
      page_size: this.page_size,
    });
  }
}

export interface ListResponse {
  total?: number;
  details?: Comment[];
}
