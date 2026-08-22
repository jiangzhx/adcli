// Generated from github.com/bububa/kwai-marketing-api/model/v2.2/unit/status_update_request.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface StatusUpdateRequestInit {
  advertiser_id?: KuaishouId;
  unit_ids?: KuaishouId[];
  put_status?: number;
}

export class StatusUpdateRequest implements PostRequest, StatusUpdateRequestInit {
  advertiser_id?: KuaishouId;
  unit_ids?: KuaishouId[];
  put_status?: number;

  constructor(init: StatusUpdateRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.unit_ids = init.unit_ids;
    this.put_status = init.put_status;
  }

  path() {
    return "v1/ad_unit/update/status";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      unit_ids: this.unit_ids,
      put_status: this.put_status,
    });
  }
}
