// Generated from github.com/bububa/kwai-marketing-api/model/campaign/update_budget_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface UpdateBudgetRequestInit {
  advertiser_id?: KuaishouId;
  campaign_id?: KuaishouId;
  day_budget?: number;
  day_budget_schedule?: number[];
}

export class UpdateBudgetRequest implements PostRequest, UpdateBudgetRequestInit {
  advertiser_id?: KuaishouId;
  campaign_id?: KuaishouId;
  day_budget?: number;
  day_budget_schedule?: number[];

  constructor(init: UpdateBudgetRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.campaign_id = init.campaign_id;
    this.day_budget = init.day_budget;
    this.day_budget_schedule = init.day_budget_schedule;
  }

  path() {
    return "v1/campaign/update";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      campaign_id: this.campaign_id,
      day_budget: this.day_budget,
      day_budget_schedule: this.day_budget_schedule,
    });
  }
}
