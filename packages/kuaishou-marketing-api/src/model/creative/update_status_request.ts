// Generated from github.com/bububa/kwai-marketing-api/model/creative/update_status_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface UpdateStatusRequestInit {
  advertiser_id?: KuaishouId;
  creative_id?: KuaishouId;
  creative_ids?: KuaishouId[];
  put_status?: number;
}

export class UpdateStatusRequest implements PostRequest, UpdateStatusRequestInit {
  advertiser_id?: KuaishouId;
  creative_id?: KuaishouId;
  creative_ids?: KuaishouId[];
  put_status?: number;

  constructor(init: UpdateStatusRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.creative_id = init.creative_id;
    this.creative_ids = init.creative_ids;
    this.put_status = init.put_status;
  }

  path() {
    return "v1/creative/update/status";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      creative_id: this.creative_id,
      creative_ids: this.creative_ids,
      put_status: this.put_status,
    });
  }
}
