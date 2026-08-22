// Generated from github.com/bububa/kwai-marketing-api/model/dmp/population_push_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface PopulationPushRequestInit {
  advertiser_id?: KuaishouId;
  orientation_id?: KuaishouId;
}

export class PopulationPushRequest implements PostRequest, PopulationPushRequestInit {
  advertiser_id?: KuaishouId;
  orientation_id?: KuaishouId;

  constructor(init: PopulationPushRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.orientation_id = init.orientation_id;
  }

  path() {
    return "v1/dmp/population/push";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      orientation_id: this.orientation_id,
    });
  }
}
