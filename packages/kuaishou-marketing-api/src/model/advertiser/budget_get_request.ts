// Generated from github.com/bububa/kwai-marketing-api/model/advertiser/budget_get_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface BudgetGetRequestInit {
  advertiser_id?: KuaishouId;
}

export class BudgetGetRequest implements PostRequest, BudgetGetRequestInit {
  advertiser_id?: KuaishouId;

  constructor(init: BudgetGetRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
  }

  path() {
    return "v1/advertiser/budget/get";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
    });
  }
}
