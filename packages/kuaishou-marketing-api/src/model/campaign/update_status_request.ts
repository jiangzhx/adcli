// Generated from github.com/bububa/kwai-marketing-api/model/campaign/update_status_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface UpdateStatusRequestInit {
  advertiser_id?: KuaishouId;
  campaign_id?: KuaishouId;
  campaign_ids?: KuaishouId[];
  put_status?: number;
}

export class UpdateStatusRequest implements PostRequest, UpdateStatusRequestInit {
  advertiser_id?: KuaishouId;
  campaign_id?: KuaishouId;
  campaign_ids?: KuaishouId[];
  put_status?: number;

  constructor(init: UpdateStatusRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.campaign_id = init.campaign_id;
    this.campaign_ids = init.campaign_ids;
    this.put_status = init.put_status;
  }

  path() {
    return "v1/campaign/update/status";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      campaign_id: this.campaign_id,
      campaign_ids: this.campaign_ids,
      put_status: this.put_status,
    });
  }
}
