// Generated from github.com/bububa/kwai-marketing-api/model/asset/adv_card_remove_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface AdvCardRemoveRequestInit {
  advertiser_id?: KuaishouId;
  adv_card_id?: KuaishouId;
}

export class AdvCardRemoveRequest implements PostRequest, AdvCardRemoveRequestInit {
  advertiser_id?: KuaishouId;
  adv_card_id?: KuaishouId;

  constructor(init: AdvCardRemoveRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.adv_card_id = init.adv_card_id;
  }

  path() {
    return "v1/asset/adv_card/remove";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      adv_card_id: this.adv_card_id,
    });
  }
}
