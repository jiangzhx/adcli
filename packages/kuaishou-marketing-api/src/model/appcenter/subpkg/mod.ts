// Generated from github.com/bububa/kwai-marketing-api/model/appcenter/subpkg/mod.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface ModRequestInit {
  advertiser_id?: KuaishouId;
  package_id?: KuaishouId[];
  put_status?: number;
}

export class ModRequest implements PostRequest, ModRequestInit {
  advertiser_id?: KuaishouId;
  package_id?: KuaishouId[];
  put_status?: number;

  constructor(init: ModRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.package_id = init.package_id;
    this.put_status = init.put_status;
  }

  path() {
    return "gw/dsp/appcenter/subpkg/mod";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      package_id: this.package_id,
      put_status: this.put_status,
    });
  }
}

export interface ModResponse {
  result?: boolean;
}
