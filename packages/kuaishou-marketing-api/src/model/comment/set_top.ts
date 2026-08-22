// Generated from github.com/bububa/kwai-marketing-api/model/comment/set_top.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface SetTopRequestInit {
  advertiser_id?: KuaishouId;
  comment_id?: KuaishouId;
  photo_id?: KuaishouId;
}

export class SetTopRequest implements PostRequest, SetTopRequestInit {
  advertiser_id?: KuaishouId;
  comment_id?: KuaishouId;
  photo_id?: KuaishouId;

  constructor(init: SetTopRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.comment_id = init.comment_id;
    this.photo_id = init.photo_id;
  }

  path() {
    return "v1/comment/setTop";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      comment_id: this.comment_id,
      photo_id: this.photo_id,
    });
  }
}

export interface SetTopResponse {
  comment_id?: KuaishouId;
}
