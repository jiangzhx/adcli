// Generated from github.com/bububa/kwai-marketing-api/model/campaign/update_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface UpdateRequestInit {
  advertiser_id?: KuaishouId;
  campaign_id?: KuaishouId;
  campaign_name?: string;
  day_budget?: number;
  day_budget_schedule?: number[];
}

export class UpdateRequest implements PostRequest, UpdateRequestInit {
  advertiser_id?: KuaishouId;
  campaign_id?: KuaishouId;
  campaign_name?: string;
  day_budget?: number;
  day_budget_schedule?: number[];

  constructor(init: UpdateRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.campaign_id = init.campaign_id;
    this.campaign_name = init.campaign_name;
    this.day_budget = init.day_budget;
    this.day_budget_schedule = init.day_budget_schedule;
  }

  path() {
    return "v2/campaign/update";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      campaign_id: this.campaign_id,
      campaign_name: this.campaign_name,
      day_budget: this.day_budget,
      day_budget_schedule: this.day_budget_schedule,
    });
  }
}
