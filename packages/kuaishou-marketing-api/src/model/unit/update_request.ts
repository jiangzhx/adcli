// Generated from github.com/bububa/kwai-marketing-api/model/unit/update_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";
import type { Target } from "../target_v2/target";
import type { GiftData } from "./gift_data";

export interface UpdateRequestInit {
  advertiser_id?: KuaishouId;
  unit_id?: KuaishouId;
  campaign_id?: KuaishouId;
  unit_name?: string;
  put_status?: number;
  template_id?: KuaishouId;
  bid_type?: number;
  use_app_market?: number;
  app_store?: string[];
  bid?: KuaishouId;
  cpa_bid?: KuaishouId;
  smart_bid?: number;
  ocpx_action_type?: number;
  deep_conversion_type?: number;
  roi_ratio?: number;
  deep_conversion_bid?: KuaishouId;
  scene_id?: number[];
  unit_type?: number;
  begin_time?: string;
  end_time?: string;
  schedule_time?: string;
  day_budget?: number;
  day_budget_schedule?: number[];
  convert_id?: number;
  url_type?: number;
  web_url_type?: number;
  url?: string;
  schema_uri?: string;
  app_id?: KuaishouId;
  show_mode?: number;
  speed?: number;
  site_type?: number;
  gift_data?: GiftData;
  video_landing_page?: boolean;
  auto_target?: boolean;
  auto_create_photo?: boolean;
  item_id?: KuaishouId;
  merchant_item_put_type?: number;
  fiction_id?: KuaishouId;
  smart_cover?: boolean;
  asset_mining?: boolean;
  consult_id?: KuaishouId;
  adv_card_option?: number;
  adv_card_list?: number[];
  card_type?: number;
  merchandise_id?: KuaishouId;
  merchandise_type?: number;
  intention_target?: boolean;
  target?: Target;
}

export class UpdateRequest implements PostRequest, UpdateRequestInit {
  advertiser_id?: KuaishouId;
  unit_id?: KuaishouId;
  campaign_id?: KuaishouId;
  unit_name?: string;
  put_status?: number;
  template_id?: KuaishouId;
  bid_type?: number;
  use_app_market?: number;
  app_store?: string[];
  bid?: KuaishouId;
  cpa_bid?: KuaishouId;
  smart_bid?: number;
  ocpx_action_type?: number;
  deep_conversion_type?: number;
  roi_ratio?: number;
  deep_conversion_bid?: KuaishouId;
  scene_id?: number[];
  unit_type?: number;
  begin_time?: string;
  end_time?: string;
  schedule_time?: string;
  day_budget?: number;
  day_budget_schedule?: number[];
  convert_id?: number;
  url_type?: number;
  web_url_type?: number;
  url?: string;
  schema_uri?: string;
  app_id?: KuaishouId;
  show_mode?: number;
  speed?: number;
  site_type?: number;
  gift_data?: GiftData;
  video_landing_page?: boolean;
  auto_target?: boolean;
  auto_create_photo?: boolean;
  item_id?: KuaishouId;
  merchant_item_put_type?: number;
  fiction_id?: KuaishouId;
  smart_cover?: boolean;
  asset_mining?: boolean;
  consult_id?: KuaishouId;
  adv_card_option?: number;
  adv_card_list?: number[];
  card_type?: number;
  merchandise_id?: KuaishouId;
  merchandise_type?: number;
  intention_target?: boolean;
  target?: Target;

  constructor(init: UpdateRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.unit_id = init.unit_id;
    this.campaign_id = init.campaign_id;
    this.unit_name = init.unit_name;
    this.put_status = init.put_status;
    this.template_id = init.template_id;
    this.bid_type = init.bid_type;
    this.use_app_market = init.use_app_market;
    this.app_store = init.app_store;
    this.bid = init.bid;
    this.cpa_bid = init.cpa_bid;
    this.smart_bid = init.smart_bid;
    this.ocpx_action_type = init.ocpx_action_type;
    this.deep_conversion_type = init.deep_conversion_type;
    this.roi_ratio = init.roi_ratio;
    this.deep_conversion_bid = init.deep_conversion_bid;
    this.scene_id = init.scene_id;
    this.unit_type = init.unit_type;
    this.begin_time = init.begin_time;
    this.end_time = init.end_time;
    this.schedule_time = init.schedule_time;
    this.day_budget = init.day_budget;
    this.day_budget_schedule = init.day_budget_schedule;
    this.convert_id = init.convert_id;
    this.url_type = init.url_type;
    this.web_url_type = init.web_url_type;
    this.url = init.url;
    this.schema_uri = init.schema_uri;
    this.app_id = init.app_id;
    this.show_mode = init.show_mode;
    this.speed = init.speed;
    this.site_type = init.site_type;
    this.gift_data = init.gift_data;
    this.video_landing_page = init.video_landing_page;
    this.auto_target = init.auto_target;
    this.auto_create_photo = init.auto_create_photo;
    this.item_id = init.item_id;
    this.merchant_item_put_type = init.merchant_item_put_type;
    this.fiction_id = init.fiction_id;
    this.smart_cover = init.smart_cover;
    this.asset_mining = init.asset_mining;
    this.consult_id = init.consult_id;
    this.adv_card_option = init.adv_card_option;
    this.adv_card_list = init.adv_card_list;
    this.card_type = init.card_type;
    this.merchandise_id = init.merchandise_id;
    this.merchandise_type = init.merchandise_type;
    this.intention_target = init.intention_target;
    this.target = init.target;
  }

  path() {
    return "v2/ad_unit/update";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      unit_id: this.unit_id,
      campaign_id: this.campaign_id,
      unit_name: this.unit_name,
      put_status: this.put_status,
      template_id: this.template_id,
      bid_type: this.bid_type,
      use_app_market: this.use_app_market,
      app_store: this.app_store,
      bid: this.bid,
      cpa_bid: this.cpa_bid,
      smart_bid: this.smart_bid,
      ocpx_action_type: this.ocpx_action_type,
      deep_conversion_type: this.deep_conversion_type,
      roi_ratio: this.roi_ratio,
      deep_conversion_bid: this.deep_conversion_bid,
      scene_id: this.scene_id,
      unit_type: this.unit_type,
      begin_time: this.begin_time,
      end_time: this.end_time,
      schedule_time: this.schedule_time,
      day_budget: this.day_budget,
      day_budget_schedule: this.day_budget_schedule,
      convert_id: this.convert_id,
      url_type: this.url_type,
      web_url_type: this.web_url_type,
      url: this.url,
      schema_uri: this.schema_uri,
      app_id: this.app_id,
      show_mode: this.show_mode,
      speed: this.speed,
      site_type: this.site_type,
      gift_data: this.gift_data,
      video_landing_page: this.video_landing_page,
      auto_target: this.auto_target,
      auto_create_photo: this.auto_create_photo,
      item_id: this.item_id,
      merchant_item_put_type: this.merchant_item_put_type,
      fiction_id: this.fiction_id,
      smart_cover: this.smart_cover,
      asset_mining: this.asset_mining,
      consult_id: this.consult_id,
      adv_card_option: this.adv_card_option,
      adv_card_list: this.adv_card_list,
      card_type: this.card_type,
      merchandise_id: this.merchandise_id,
      merchandise_type: this.merchandise_type,
      intention_target: this.intention_target,
      target: this.target,
    });
  }
}
