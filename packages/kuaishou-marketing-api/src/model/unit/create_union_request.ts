// Generated from github.com/bububa/kwai-marketing-api/model/unit/create_union_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";
import type { Target } from "../target_v2/target";

export interface CreateUnionRequestInit {
  advertiser_id?: KuaishouId;
  campaign_id?: KuaishouId;
  unit_name?: string;
  bid_type?: number;
  bid?: KuaishouId;
  cpa_bid?: KuaishouId;
  ocpx_action_type?: number;
  deep_conversion_type?: number;
  deep_conversion_bid?: KuaishouId;
  scene_id?: number[];
  unit_type?: number;
  begin_time?: string;
  end_time?: string;
  schedule_time?: string;
  day_budget?: number;
  day_budget_schedule?: number[];
  convert_id?: number;
  url?: string;
  app_id?: KuaishouId;
  show_mode?: number;
  speed?: number;
  playable_orientation?: number;
  playable_url?: string;
  playalbe_switch_omitempty?: number;
  target?: Target;
}

export class CreateUnionRequest implements PostRequest, CreateUnionRequestInit {
  advertiser_id?: KuaishouId;
  campaign_id?: KuaishouId;
  unit_name?: string;
  bid_type?: number;
  bid?: KuaishouId;
  cpa_bid?: KuaishouId;
  ocpx_action_type?: number;
  deep_conversion_type?: number;
  deep_conversion_bid?: KuaishouId;
  scene_id?: number[];
  unit_type?: number;
  begin_time?: string;
  end_time?: string;
  schedule_time?: string;
  day_budget?: number;
  day_budget_schedule?: number[];
  convert_id?: number;
  url?: string;
  app_id?: KuaishouId;
  show_mode?: number;
  speed?: number;
  playable_orientation?: number;
  playable_url?: string;
  playalbe_switch_omitempty?: number;
  target?: Target;

  constructor(init: CreateUnionRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.campaign_id = init.campaign_id;
    this.unit_name = init.unit_name;
    this.bid_type = init.bid_type;
    this.bid = init.bid;
    this.cpa_bid = init.cpa_bid;
    this.ocpx_action_type = init.ocpx_action_type;
    this.deep_conversion_type = init.deep_conversion_type;
    this.deep_conversion_bid = init.deep_conversion_bid;
    this.scene_id = init.scene_id;
    this.unit_type = init.unit_type;
    this.begin_time = init.begin_time;
    this.end_time = init.end_time;
    this.schedule_time = init.schedule_time;
    this.day_budget = init.day_budget;
    this.day_budget_schedule = init.day_budget_schedule;
    this.convert_id = init.convert_id;
    this.url = init.url;
    this.app_id = init.app_id;
    this.show_mode = init.show_mode;
    this.speed = init.speed;
    this.playable_orientation = init.playable_orientation;
    this.playable_url = init.playable_url;
    this.playalbe_switch_omitempty = init.playalbe_switch_omitempty;
    this.target = init.target;
  }

  path() {
    return "v2/ad_unit/create";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      campaign_id: this.campaign_id,
      unit_name: this.unit_name,
      bid_type: this.bid_type,
      bid: this.bid,
      cpa_bid: this.cpa_bid,
      ocpx_action_type: this.ocpx_action_type,
      deep_conversion_type: this.deep_conversion_type,
      deep_conversion_bid: this.deep_conversion_bid,
      scene_id: this.scene_id,
      unit_type: this.unit_type,
      begin_time: this.begin_time,
      end_time: this.end_time,
      schedule_time: this.schedule_time,
      day_budget: this.day_budget,
      day_budget_schedule: this.day_budget_schedule,
      convert_id: this.convert_id,
      url: this.url,
      app_id: this.app_id,
      show_mode: this.show_mode,
      speed: this.speed,
      playable_orientation: this.playable_orientation,
      playable_url: this.playable_url,
      playalbe_switch_omitempty: this.playalbe_switch_omitempty,
      target: this.target,
    });
  }
}
