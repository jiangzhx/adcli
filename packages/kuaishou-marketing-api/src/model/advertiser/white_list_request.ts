// Generated from github.com/bububa/kwai-marketing-api/model/advertiser/white_list_request.go
// Do not edit manually.

import type { GetRequest } from "../request";
import type { KuaishouId } from "../types";
import { encodeQuery } from "../types";

export interface WhiteListRequestInit {
  advertiser_id?: KuaishouId;
}

export class WhiteListRequest implements GetRequest, WhiteListRequestInit {
  advertiser_id?: KuaishouId;

  constructor(init: WhiteListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
  }

  path() {
    return "v1/advertiser/white_list";
  }

  encode() {
    return encodeQuery({
      advertiser_id: this.advertiser_id == null ? undefined : String(this.advertiser_id),
    });
  }
}
