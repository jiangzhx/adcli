// Generated from github.com/bububa/kwai-marketing-api/model/comment/shield.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface ShieldRequestInit {
  advertiser_id?: KuaishouId;
  shield_list?: ShieldComment[];
}

export class ShieldRequest implements PostRequest, ShieldRequestInit {
  advertiser_id?: KuaishouId;
  shield_list?: ShieldComment[];

  constructor(init: ShieldRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.shield_list = init.shield_list;
  }

  path() {
    return "v1/comment/shield";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      shield_list: this.shield_list,
    });
  }
}

export interface ShieldComment {
  comment_id?: KuaishouId;
  photo_id?: KuaishouId;
}
