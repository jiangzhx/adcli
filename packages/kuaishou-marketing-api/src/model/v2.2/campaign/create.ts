// Generated from github.com/bububa/kwai-marketing-api/model/v2.2/campaign/create.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";
import type { AutoBuildNameRule } from "./campaign";

export interface CreateRequestInit {
  advertiser_id?: KuaishouId;
  campaign_name?: string;
  type?: number;
  day_budget?: number;
  day_budget_schedule?: number[];
  ad_type?: number;
  bid_type?: number;
  auto_adjust?: number;
  auto_build?: number;
  auto_build_name_rule?: AutoBuildNameRule;
}

export class CreateRequest implements PostRequest, CreateRequestInit {
  advertiser_id?: KuaishouId;
  campaign_name?: string;
  type?: number;
  day_budget?: number;
  day_budget_schedule?: number[];
  ad_type?: number;
  bid_type?: number;
  auto_adjust?: number;
  auto_build?: number;
  auto_build_name_rule?: AutoBuildNameRule;

  constructor(init: CreateRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.campaign_name = init.campaign_name;
    this.type = init.type;
    this.day_budget = init.day_budget;
    this.day_budget_schedule = init.day_budget_schedule;
    this.ad_type = init.ad_type;
    this.bid_type = init.bid_type;
    this.auto_adjust = init.auto_adjust;
    this.auto_build = init.auto_build;
    this.auto_build_name_rule = init.auto_build_name_rule;
  }

  path() {
    return "gw/dsp/campaign/create";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      campaign_name: this.campaign_name,
      type: this.type,
      day_budget: this.day_budget,
      day_budget_schedule: this.day_budget_schedule,
      ad_type: this.ad_type,
      bid_type: this.bid_type,
      auto_adjust: this.auto_adjust,
      auto_build: this.auto_build,
      auto_build_name_rule: this.auto_build_name_rule,
    });
  }
}

export interface CreateResponse {
  campaign_id?: KuaishouId;
}
