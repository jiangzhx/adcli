// Generated from github.com/bububa/kwai-marketing-api/model/comment/reply.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";
import type { CommentReply } from "./comment";

export interface ReplyRequestInit {
  advertiser_id?: KuaishouId;
  reply_list?: CommentReply[];
}

export class ReplyRequest implements PostRequest, ReplyRequestInit {
  advertiser_id?: KuaishouId;
  reply_list?: CommentReply[];

  constructor(init: ReplyRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.reply_list = init.reply_list;
  }

  path() {
    return "v1/comment/reply";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      reply_list: this.reply_list,
    });
  }
}

export interface ReplyResponse {
  reply_result_list?: ReplyResult[];
}

export interface ReplyResult {
  reply_to_comment_id?: KuaishouId;
  reply_result?: number;
}
