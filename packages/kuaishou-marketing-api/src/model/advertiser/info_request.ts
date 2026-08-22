// Generated from github.com/bububa/kwai-marketing-api/model/advertiser/info_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface InfoRequestInit {
  advertiser_id?: KuaishouId;
}

export class InfoRequest implements PostRequest, InfoRequestInit {
  advertiser_id?: KuaishouId;

  constructor(init: InfoRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
  }

  path() {
    return "v1/advertiser/info";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
    });
  }
}
