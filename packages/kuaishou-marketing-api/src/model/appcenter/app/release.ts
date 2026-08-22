// Generated from github.com/bububa/kwai-marketing-api/model/appcenter/app/release.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface ReleaseRequestInit {
  advertiser_id?: KuaishouId;
  package_ids?: KuaishouId[];
}

export class ReleaseRequest implements PostRequest, ReleaseRequestInit {
  advertiser_id?: KuaishouId;
  package_ids?: KuaishouId[];

  constructor(init: ReleaseRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.package_ids = init.package_ids;
  }

  path() {
    return "gw/dsp/appcenter/app/release";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      package_ids: this.package_ids,
    });
  }
}
