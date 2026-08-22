// Generated from github.com/bububa/kwai-marketing-api/model/campaign/create_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface CreateRequestInit {
  advertiser_id?: KuaishouId;
  campaign_name?: string;
  type?: number;
  sub_type?: number;
  day_budget?: number;
  day_budget_schedule?: number[];
}

export class CreateRequest implements PostRequest, CreateRequestInit {
  advertiser_id?: KuaishouId;
  campaign_name?: string;
  type?: number;
  sub_type?: number;
  day_budget?: number;
  day_budget_schedule?: number[];

  constructor(init: CreateRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.campaign_name = init.campaign_name;
    this.type = init.type;
    this.sub_type = init.sub_type;
    this.day_budget = init.day_budget;
    this.day_budget_schedule = init.day_budget_schedule;
  }

  path() {
    return "v2/campaign/create";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      campaign_name: this.campaign_name,
      type: this.type,
      sub_type: this.sub_type,
      day_budget: this.day_budget,
      day_budget_schedule: this.day_budget_schedule,
    });
  }
}
