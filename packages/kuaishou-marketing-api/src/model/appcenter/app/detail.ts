// Generated from github.com/bububa/kwai-marketing-api/model/appcenter/app/detail.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface DetailRequestInit {
  advertiser_id?: KuaishouId;
  package_id?: KuaishouId;
}

export class DetailRequest implements PostRequest, DetailRequestInit {
  advertiser_id?: KuaishouId;
  package_id?: KuaishouId;

  constructor(init: DetailRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.package_id = init.package_id;
  }

  path() {
    return "gw/dsp/appcenter/app/detail";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      package_id: this.package_id,
    });
  }
}
