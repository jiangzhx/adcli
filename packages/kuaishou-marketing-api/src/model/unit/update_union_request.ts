// Generated from github.com/bububa/kwai-marketing-api/model/unit/update_union_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";
import type { Target } from "../target_v2/target";

export interface UpdateUnionRequestInit {
  advertiser_id?: KuaishouId;
  union_id?: KuaishouId;
  unit_name?: string;
  bid_type?: number;
  bid?: KuaishouId;
  cpa_bid?: KuaishouId;
  deep_conversion_bid?: KuaishouId;
  begin_time?: string;
  end_time?: string;
  schedule_time?: string;
  day_budget?: number;
  url?: string;
  app_id?: KuaishouId;
  show_mode?: number;
  speed?: number;
  playable_orientation?: number;
  playable_url?: string;
  playalbe_switch_omitempty?: number;
  target?: Target;
}

export class UpdateUnionRequest implements PostRequest, UpdateUnionRequestInit {
  advertiser_id?: KuaishouId;
  union_id?: KuaishouId;
  unit_name?: string;
  bid_type?: number;
  bid?: KuaishouId;
  cpa_bid?: KuaishouId;
  deep_conversion_bid?: KuaishouId;
  begin_time?: string;
  end_time?: string;
  schedule_time?: string;
  day_budget?: number;
  url?: string;
  app_id?: KuaishouId;
  show_mode?: number;
  speed?: number;
  playable_orientation?: number;
  playable_url?: string;
  playalbe_switch_omitempty?: number;
  target?: Target;

  constructor(init: UpdateUnionRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.union_id = init.union_id;
    this.unit_name = init.unit_name;
    this.bid_type = init.bid_type;
    this.bid = init.bid;
    this.cpa_bid = init.cpa_bid;
    this.deep_conversion_bid = init.deep_conversion_bid;
    this.begin_time = init.begin_time;
    this.end_time = init.end_time;
    this.schedule_time = init.schedule_time;
    this.day_budget = init.day_budget;
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
    return "v2/ad_unit/update";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      union_id: this.union_id,
      unit_name: this.unit_name,
      bid_type: this.bid_type,
      bid: this.bid,
      cpa_bid: this.cpa_bid,
      deep_conversion_bid: this.deep_conversion_bid,
      begin_time: this.begin_time,
      end_time: this.end_time,
      schedule_time: this.schedule_time,
      day_budget: this.day_budget,
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
