// Generated from github.com/bububa/kwai-marketing-api/model/adcompass/advertisers_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface AdvertisersRequestInit {
  advertiser_id?: KuaishouId;
}

export class AdvertisersRequest implements PostRequest, AdvertisersRequestInit {
  advertiser_id?: KuaishouId;

  constructor(init: AdvertisersRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
  }

  path() {
    return "gw/uc/v1/advertisers";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
    });
  }
}
