// Generated from github.com/bububa/kwai-marketing-api/model/v2.2/unit/bid_update_request.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface BidUpdateRequestInit {
  advertiser_id?: KuaishouId;
  unit_ids?: KuaishouId[];
  bid?: KuaishouId;
}

export class BidUpdateRequest implements PostRequest, BidUpdateRequestInit {
  advertiser_id?: KuaishouId;
  unit_ids?: KuaishouId[];
  bid?: KuaishouId;

  constructor(init: BidUpdateRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.unit_ids = init.unit_ids;
    this.bid = init.bid;
  }

  path() {
    return "v1/ad_unit/update/bid";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      unit_ids: this.unit_ids,
      bid: this.bid,
    });
  }
}
