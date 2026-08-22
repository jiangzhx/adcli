// Generated from github.com/bububa/kwai-marketing-api/model/asset/adv_card_create_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";
import type { AdvCard } from "./adv_card";

export interface AdvCardCreateRequestInit {
  advertiser_id?: KuaishouId;
  adv_list?: AdvCard[];
}

export class AdvCardCreateRequest implements PostRequest, AdvCardCreateRequestInit {
  advertiser_id?: KuaishouId;
  adv_list?: AdvCard[];

  constructor(init: AdvCardCreateRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.adv_list = init.adv_list;
  }

  path() {
    return "v1/asset/adv_card/create";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      adv_list: this.adv_list,
    });
  }
}
