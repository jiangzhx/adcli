// Generated from github.com/bububa/kwai-marketing-api/model/tool/quota_info_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface QuotaInfoRequestInit {
  advertiser_id?: KuaishouId;
}

export class QuotaInfoRequest implements PostRequest, QuotaInfoRequestInit {
  advertiser_id?: KuaishouId;

  constructor(init: QuotaInfoRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
  }

  path() {
    return "gw/dsp/quota/info";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
    });
  }
}
