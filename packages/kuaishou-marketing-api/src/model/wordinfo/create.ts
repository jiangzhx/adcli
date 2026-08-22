// Generated from github.com/bububa/kwai-marketing-api/model/wordinfo/create.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";
import type { WordInfo } from "./wordinfo";

export interface CreateRequestInit {
  advertiser_id?: KuaishouId;
  campaign_id?: KuaishouId;
  unit_id?: KuaishouId;
  word_infos?: WordInfo[];
}

export class CreateRequest implements PostRequest, CreateRequestInit {
  advertiser_id?: KuaishouId;
  campaign_id?: KuaishouId;
  unit_id?: KuaishouId;
  word_infos?: WordInfo[];

  constructor(init: CreateRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.campaign_id = init.campaign_id;
    this.unit_id = init.unit_id;
    this.word_infos = init.word_infos;
  }

  path() {
    return "v2/word_info/create";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      campaign_id: this.campaign_id,
      unit_id: this.unit_id,
      word_infos: this.word_infos,
    });
  }
}

export interface CreateResponse {
  error_list?: WordInfo[];
  success_list?: WordInfo[];
}
