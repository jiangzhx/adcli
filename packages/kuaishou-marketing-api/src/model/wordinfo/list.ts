// Generated from github.com/bububa/kwai-marketing-api/model/wordinfo/list.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";
import type { WordInfo } from "./wordinfo";

export interface ListRequestInit {
  advertiser_id?: KuaishouId;
  unit_id?: KuaishouId;
}

export class ListRequest implements PostRequest, ListRequestInit {
  advertiser_id?: KuaishouId;
  unit_id?: KuaishouId;

  constructor(init: ListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.unit_id = init.unit_id;
  }

  path() {
    return "v2/word_info/list";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      unit_id: this.unit_id,
    });
  }
}

export interface ListResponse {
  total_count?: number;
  details?: WordInfo[];
}
