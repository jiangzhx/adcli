// Generated from github.com/bububa/kwai-marketing-api/model/creative/creative_tag_advise_request.go
// Do not edit manually.

import type { GetRequest } from "../request";
import type { KuaishouId } from "../types";
import { encodeQuery } from "../types";

export interface CreativeTagAdviseRequestInit {
  advertiser_id?: KuaishouId;
}

export class CreativeTagAdviseRequest implements GetRequest, CreativeTagAdviseRequestInit {
  advertiser_id?: KuaishouId;

  constructor(init: CreativeTagAdviseRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
  }

  path() {
    return "v1/creative/creative_tag/advise";
  }

  encode() {
    return encodeQuery({
      advertiser_id: this.advertiser_id == null ? undefined : String(this.advertiser_id),
    });
  }
}
