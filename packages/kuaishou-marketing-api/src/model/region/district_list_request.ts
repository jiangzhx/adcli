// Generated from github.com/bububa/kwai-marketing-api/model/region/district_list_request.go
// Do not edit manually.

import type { GetRequest } from "../request";
import type { KuaishouId } from "../types";
import { encodeQuery } from "../types";

export interface DistrictListRequestInit {
  advertiser_id?: KuaishouId;
}

export class DistrictListRequest implements GetRequest, DistrictListRequestInit {
  advertiser_id?: KuaishouId;

  constructor(init: DistrictListRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
  }

  path() {
    return "v1/region/district/list";
  }

  encode() {
    return encodeQuery({
      advertiser_id: this.advertiser_id == null ? undefined : String(this.advertiser_id),
    });
  }
}
