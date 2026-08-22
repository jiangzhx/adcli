// Generated from github.com/bububa/kwai-marketing-api/model/comment/shield_info_create.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface ShieldInfoCreateRequestInit {
  advertiser_id?: KuaishouId;
  shield_content_list?: string[];
  shield_type?: number;
}

export class ShieldInfoCreateRequest implements PostRequest, ShieldInfoCreateRequestInit {
  advertiser_id?: KuaishouId;
  shield_content_list?: string[];
  shield_type?: number;

  constructor(init: ShieldInfoCreateRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.shield_content_list = init.shield_content_list;
    this.shield_type = init.shield_type;
  }

  path() {
    return "v1/comment/shield_info/create";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      shield_content_list: this.shield_content_list,
      shield_type: this.shield_type,
    });
  }
}

export interface ShieldInfoCreateResponse {
  shield_info_id_list?: number[];
}
