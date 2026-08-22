// Generated from github.com/bububa/kwai-marketing-api/model/appcenter/subpkg/description.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface DescriptionRequestInit {
  advertiser_id?: KuaishouId;
  package_id?: KuaishouId;
  description?: string;
}

export class DescriptionRequest implements PostRequest, DescriptionRequestInit {
  advertiser_id?: KuaishouId;
  package_id?: KuaishouId;
  description?: string;

  constructor(init: DescriptionRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.package_id = init.package_id;
    this.description = init.description;
  }

  path() {
    return "gw/dsp/appcenter/subpkg/description";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      package_id: this.package_id,
      description: this.description,
    });
  }
}
