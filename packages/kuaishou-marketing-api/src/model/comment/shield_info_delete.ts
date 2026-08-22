// Generated from github.com/bububa/kwai-marketing-api/model/comment/shield_info_delete.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface ShieldInfoDeleteRequestInit {
  advertiser_id?: KuaishouId;
  shield_info_id_list?: number[];
}

export class ShieldInfoDeleteRequest implements PostRequest, ShieldInfoDeleteRequestInit {
  advertiser_id?: KuaishouId;
  shield_info_id_list?: number[];

  constructor(init: ShieldInfoDeleteRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.shield_info_id_list = init.shield_info_id_list;
  }

  path() {
    return "v1/comment/shield_info/delete";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      shield_info_id_list: this.shield_info_id_list,
    });
  }
}
