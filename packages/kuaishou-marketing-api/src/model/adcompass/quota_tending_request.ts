// Generated from github.com/bububa/kwai-marketing-api/model/adcompass/quota_tending_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface QuotaTendingRequestInit {
  tending_details?: TendingDetails[];
}

export class QuotaTendingRequest implements PostRequest, QuotaTendingRequestInit {
  tending_details?: TendingDetails[];

  constructor(init: QuotaTendingRequestInit = {}) {
    this.tending_details = init.tending_details;
  }

  path() {
    return "gw/ad_compass/quota/tending";
  }

  encode() {
    return jsonMarshal({
      tending_details: this.tending_details,
    });
  }
}

export interface TendingDetails {
  from_account_id?: KuaishouId;
  to_account_id?: KuaishouId;
  tending_count?: number;
}
