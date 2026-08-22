// Generated from github.com/bububa/kwai-marketing-api/model/asset/adv_card_list_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface AdvCardListRequestInit {
  advertiser_id?: KuaishouId;
  card_type?: number;
  page?: number;
  page_size?: number;
}

export class AdvCardListRequest implements PostRequest, AdvCardListRequestInit {
  advertiser_id?: KuaishouId;
  card_type?: number;
  page?: number;
  page_size?: number;

  constructor(init: AdvCardListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.card_type = init.card_type;
    this.page = init.page;
    this.page_size = init.page_size;
  }

  path() {
    return "v1/asset/adv_card/list";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      card_type: this.card_type,
      page: this.page,
      page_size: this.page_size,
    });
  }
}
