// Generated from github.com/bububa/kwai-marketing-api/model/v2.2/campaign/update.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";
import type { AutoBuildNameRule } from "./campaign";

export interface UpdateRequestInit {
  advertiser_id?: KuaishouId;
  campaign_id?: KuaishouId;
  campaign_name?: string;
  type?: number;
  day_budget?: number;
  day_budget_schedule?: number[];
  ad_type?: number;
  bid_type?: number;
  auto_adjust?: number;
  auto_build?: number;
  auto_build_name_rule?: AutoBuildNameRule;
  auto_manage?: number;
  campaign_ocpx_action_type?: number;
  campaign_deep_conversion_type?: number;
  put_status?: number;
}

export class UpdateRequest implements PostRequest, UpdateRequestInit {
  advertiser_id?: KuaishouId;
  campaign_id?: KuaishouId;
  campaign_name?: string;
  type?: number;
  day_budget?: number;
  day_budget_schedule?: number[];
  ad_type?: number;
  bid_type?: number;
  auto_adjust?: number;
  auto_build?: number;
  auto_build_name_rule?: AutoBuildNameRule;
  auto_manage?: number;
  campaign_ocpx_action_type?: number;
  campaign_deep_conversion_type?: number;
  put_status?: number;

  constructor(init: UpdateRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.campaign_id = init.campaign_id;
    this.campaign_name = init.campaign_name;
    this.type = init.type;
    this.day_budget = init.day_budget;
    this.day_budget_schedule = init.day_budget_schedule;
    this.ad_type = init.ad_type;
    this.bid_type = init.bid_type;
    this.auto_adjust = init.auto_adjust;
    this.auto_build = init.auto_build;
    this.auto_build_name_rule = init.auto_build_name_rule;
    this.auto_manage = init.auto_manage;
    this.campaign_ocpx_action_type = init.campaign_ocpx_action_type;
    this.campaign_deep_conversion_type = init.campaign_deep_conversion_type;
    this.put_status = init.put_status;
  }

  path() {
    return "gw/dsp/campaign/update";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      campaign_id: this.campaign_id,
      campaign_name: this.campaign_name,
      type: this.type,
      day_budget: this.day_budget,
      day_budget_schedule: this.day_budget_schedule,
      ad_type: this.ad_type,
      bid_type: this.bid_type,
      auto_adjust: this.auto_adjust,
      auto_build: this.auto_build,
      auto_build_name_rule: this.auto_build_name_rule,
      auto_manage: this.auto_manage,
      campaign_ocpx_action_type: this.campaign_ocpx_action_type,
      campaign_deep_conversion_type: this.campaign_deep_conversion_type,
      put_status: this.put_status,
    });
  }
}

export interface UpdateResponse {
  campaign_id?: KuaishouId;
}
