// Generated from github.com/bububa/kwai-marketing-api/model/dsp/unit/update_day_budget.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface UpdateDayBudgetRequestInit {
  advertiser_id?: KuaishouId;
  unit_id?: KuaishouId;
  day_budget?: number;
  day_budget_schedule?: number[];
}

export class UpdateDayBudgetRequest implements PostRequest, UpdateDayBudgetRequestInit {
  advertiser_id?: KuaishouId;
  unit_id?: KuaishouId;
  day_budget?: number;
  day_budget_schedule?: number[];

  constructor(init: UpdateDayBudgetRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.unit_id = init.unit_id;
    this.day_budget = init.day_budget;
    this.day_budget_schedule = init.day_budget_schedule;
  }

  path() {
    return "v1/ad_unit/update/day_budget";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      unit_id: this.unit_id,
      day_budget: this.day_budget,
      day_budget_schedule: this.day_budget_schedule,
    });
  }
}
