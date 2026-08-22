// Generated from github.com/bububa/kwai-marketing-api/model/advertiser/fund_get_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface FundGetRequestInit {
  advertiser_id?: KuaishouId;
}

export class FundGetRequest implements PostRequest, FundGetRequestInit {
  advertiser_id?: KuaishouId;

  constructor(init: FundGetRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
  }

  path() {
    return "v1/advertiser/fund/get";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
    });
  }
}
