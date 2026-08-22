// Generated from github.com/bububa/kwai-marketing-api/model/v2.2/campaign/status_update.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface StatusUpdateRequestInit {
  advertiser_id?: KuaishouId;
  campaign_ids?: KuaishouId[];
  put_status?: number;
}

export class StatusUpdateRequest implements PostRequest, StatusUpdateRequestInit {
  advertiser_id?: KuaishouId;
  campaign_ids?: KuaishouId[];
  put_status?: number;

  constructor(init: StatusUpdateRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.campaign_ids = init.campaign_ids;
    this.put_status = init.put_status;
  }

  path() {
    return "v1/campaign/update/status";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      campaign_ids: this.campaign_ids,
      put_status: this.put_status,
    });
  }
}

export interface StatusUpdateResponse {
  campaign_ids?: KuaishouId[];
}
