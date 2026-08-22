// Generated from github.com/bububa/kwai-marketing-api/model/unit/update_bid_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface UpdateBidRequestInit {
  advertiser_id?: KuaishouId;
  unit_id?: KuaishouId;
  bid?: KuaishouId;
}

export class UpdateBidRequest implements PostRequest, UpdateBidRequestInit {
  advertiser_id?: KuaishouId;
  unit_id?: KuaishouId;
  bid?: KuaishouId;

  constructor(init: UpdateBidRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.unit_id = init.unit_id;
    this.bid = init.bid;
  }

  path() {
    return "v1/ad_unit/update/bid";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      unit_id: this.unit_id,
      bid: this.bid,
    });
  }
}
