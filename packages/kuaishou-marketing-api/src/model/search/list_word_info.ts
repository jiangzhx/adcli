// Generated from github.com/bububa/kwai-marketing-api/model/search/list_word_info.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface WordInfoListRequestInit {
  advertiser_id?: KuaishouId;
  unit_id?: KuaishouId;
}

export class WordInfoListRequest implements PostRequest, WordInfoListRequestInit {
  advertiser_id?: KuaishouId;
  unit_id?: KuaishouId;

  constructor(init: WordInfoListRequestInit = {}) {
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

export interface WordInfoListResponse {
  total_count?: number;
  details?: WordInfo[];
}

export interface WordInfo {
  word_info_id?: KuaishouId;
  word?: string;
  match_type?: number;
  review_status?: number;
  put_status?: number;
  status?: number;
}
