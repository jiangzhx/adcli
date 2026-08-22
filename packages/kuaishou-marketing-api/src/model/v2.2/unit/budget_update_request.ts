// Generated from github.com/bububa/kwai-marketing-api/model/v2.2/unit/budget_update_request.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface BudgetUpdateRequestInit {
  advertiser_id?: KuaishouId;
  unit_ids?: KuaishouId[];
  day_budget?: number;
}

export class BudgetUpdateRequest implements PostRequest, BudgetUpdateRequestInit {
  advertiser_id?: KuaishouId;
  unit_ids?: KuaishouId[];
  day_budget?: number;

  constructor(init: BudgetUpdateRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.unit_ids = init.unit_ids;
    this.day_budget = init.day_budget;
  }

  path() {
    return "v1/ad_unit/update/day_budget";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      unit_ids: this.unit_ids,
      day_budget: this.day_budget,
    });
  }
}
