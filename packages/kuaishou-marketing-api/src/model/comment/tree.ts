// Generated from github.com/bububa/kwai-marketing-api/model/comment/tree.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";
import type { Comment } from "./comment";

export interface TreeRequestInit {
  advertiser_id?: KuaishouId;
  comment_id?: KuaishouId;
}

export class TreeRequest implements PostRequest, TreeRequestInit {
  advertiser_id?: KuaishouId;
  comment_id?: KuaishouId;

  constructor(init: TreeRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.comment_id = init.comment_id;
  }

  path() {
    return "v1/comment/tree";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      comment_id: this.comment_id,
    });
  }
}

export interface TreeResponse {
  root_comment_detail?: Comment;
  child_comment_detail_list?: Comment[];
}
