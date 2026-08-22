// Generated from github.com/bububa/kwai-marketing-api/model/dmp/population_accounts_push_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface PopulationAccountsPushRequestInit {
  advertiser_id?: KuaishouId;
  orientation_id?: KuaishouId;
  dest_account_ids?: KuaishouId[];
}

export class PopulationAccountsPushRequest implements PostRequest, PopulationAccountsPushRequestInit {
  advertiser_id?: KuaishouId;
  orientation_id?: KuaishouId;
  dest_account_ids?: KuaishouId[];

  constructor(init: PopulationAccountsPushRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.orientation_id = init.orientation_id;
    this.dest_account_ids = init.dest_account_ids;
  }

  path() {
    return "v1/dmp/population/accounts/push";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      orientation_id: this.orientation_id,
      dest_account_ids: this.dest_account_ids,
    });
  }
}
