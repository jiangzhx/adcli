// Generated from github.com/bububa/kwai-marketing-api/model/dsp/campaign/update.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";
import type { AutoBuildNameRule } from "./campaign";

export interface UpdateRequestInit {
  advertiser_id?: KuaishouId;
  campaign_id?: KuaishouId;
  campaign_name?: string;
  day_budget?: number;
  day_budget_schedule?: number[];
  auto_adjust?: number;
  auto_build?: number;
  auto_build_name_rule?: AutoBuildNameRule;
  cap_roi_ratio?: number;
  cap_bid?: KuaishouId;
  constrait_cpa?: number;
  put_status?: number;
  auto_manage?: number;
}

export class UpdateRequest implements PostRequest, UpdateRequestInit {
  advertiser_id?: KuaishouId;
  campaign_id?: KuaishouId;
  campaign_name?: string;
  day_budget?: number;
  day_budget_schedule?: number[];
  auto_adjust?: number;
  auto_build?: number;
  auto_build_name_rule?: AutoBuildNameRule;
  cap_roi_ratio?: number;
  cap_bid?: KuaishouId;
  constrait_cpa?: number;
  put_status?: number;
  auto_manage?: number;

  constructor(init: UpdateRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.campaign_id = init.campaign_id;
    this.campaign_name = init.campaign_name;
    this.day_budget = init.day_budget;
    this.day_budget_schedule = init.day_budget_schedule;
    this.auto_adjust = init.auto_adjust;
    this.auto_build = init.auto_build;
    this.auto_build_name_rule = init.auto_build_name_rule;
    this.cap_roi_ratio = init.cap_roi_ratio;
    this.cap_bid = init.cap_bid;
    this.constrait_cpa = init.constrait_cpa;
    this.put_status = init.put_status;
    this.auto_manage = init.auto_manage;
  }

  path() {
    return "gw/dsp/campaign/update";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      campaign_id: this.campaign_id,
      campaign_name: this.campaign_name,
      day_budget: this.day_budget,
      day_budget_schedule: this.day_budget_schedule,
      auto_adjust: this.auto_adjust,
      auto_build: this.auto_build,
      auto_build_name_rule: this.auto_build_name_rule,
      cap_roi_ratio: this.cap_roi_ratio,
      cap_bid: this.cap_bid,
      constrait_cpa: this.constrait_cpa,
      put_status: this.put_status,
      auto_manage: this.auto_manage,
    });
  }
}

export interface UpdateResponse {
  campaign_id?: KuaishouId;
}
