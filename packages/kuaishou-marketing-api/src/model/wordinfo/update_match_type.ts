// Generated from github.com/bububa/kwai-marketing-api/model/wordinfo/update_match_type.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface UpdateMatchTypeRequestInit {
  advertiser_id?: KuaishouId;
  word_info_ids?: KuaishouId[];
  match_type?: number;
}

export class UpdateMatchTypeRequest implements PostRequest, UpdateMatchTypeRequestInit {
  advertiser_id?: KuaishouId;
  word_info_ids?: KuaishouId[];
  match_type?: number;

  constructor(init: UpdateMatchTypeRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.word_info_ids = init.word_info_ids;
    this.match_type = init.match_type;
  }

  path() {
    return "v2/word_info/update/match_type";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      word_info_ids: this.word_info_ids,
      match_type: this.match_type,
    });
  }
}

export interface UpdateMatchTypeResponse {
  word_info_ids?: KuaishouId[];
}
