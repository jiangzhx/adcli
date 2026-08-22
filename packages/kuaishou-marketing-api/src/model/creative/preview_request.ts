// Generated from github.com/bububa/kwai-marketing-api/model/creative/preview_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface PreviewRequestInit {
  advertiser_id?: KuaishouId;
  user_ids?: string[];
  creative_id?: KuaishouId;
  unit_id?: KuaishouId;
  unit_type?: number;
  phones?: string[];
}

export class PreviewRequest implements PostRequest, PreviewRequestInit {
  advertiser_id?: KuaishouId;
  user_ids?: string[];
  creative_id?: KuaishouId;
  unit_id?: KuaishouId;
  unit_type?: number;
  phones?: string[];

  constructor(init: PreviewRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.user_ids = init.user_ids;
    this.creative_id = init.creative_id;
    this.unit_id = init.unit_id;
    this.unit_type = init.unit_type;
    this.phones = init.phones;
  }

  path() {
    return "v1/creative/preview";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      user_ids: this.user_ids,
      creative_id: this.creative_id,
      unit_id: this.unit_id,
      unit_type: this.unit_type,
      phones: this.phones,
    });
  }
}
