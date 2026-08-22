// Generated from github.com/bububa/kwai-marketing-api/model/dsp/unit/create.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";
import type { Target } from "./target";
import type { CustomMiniAppData, DpaUnitParam, NegativeWordParam, SeriesCardInfo } from "./unit";

export interface CreateRequestInit {
  advertiser_id?: KuaishouId;
  campaign_id?: KuaishouId;
  unit_name?: string;
  put_status?: number;
  bid_type?: number;
  bid?: KuaishouId;
  cpa_bid?: KuaishouId;
  ocpx_action_type?: number;
  deep_conversion_type?: number;
  enhance_conversion_type?: number;
  roi_ratio?: number;
  deep_conversion_bid?: KuaishouId;
  scene_id?: number[];
  unit_type?: number;
  begin_time?: string;
  end_time?: string;
  schedule_time?: string;
  day_budget?: number;
  day_budget_schedule?: number;
  convert_id?: number;
  url_type?: number;
  web_url_type?: number;
  url?: string;
  site_id?: KuaishouId;
  group_id?: KuaishouId;
  schema_uri?: string;
  schema_id?: string;
  app_id?: KuaishouId;
  app_download_type?: number;
  download_page_url?: string;
  use_app_market?: number;
  app_store?: string[];
  show_mode?: number;
  site_type?: number;
  smart_cover?: boolean;
  asset_mining?: boolean;
  consult_id?: KuaishouId;
  adv_card_option?: number;
  adv_card_list?: number[];
  playable_id?: KuaishouId;
  play_button?: string;
  dpa_unit_param?: DpaUnitParam;
  jingle_bell_id?: KuaishouId;
  live_user_id?: KuaishouId;
  conversion_type?: number;
  extend_search?: boolean;
  custom_mini_app_data?: CustomMiniAppData;
  target?: Target;
  template_id?: KuaishouId;
  outer_loop_native?: number;
  quick_search?: number;
  target_explore?: number;
  negative_word_param?: NegativeWordParam;
  package_id?: KuaishouId;
  series_id?: KuaishouId;
  episode_id?: KuaishouId;
  series_card_type?: number;
  series_card_info?: SeriesCardInfo;
  series_pay_template_id?: KuaishouId;
  series_pay_mode?: number;
  u_link?: string;
}

export class CreateRequest implements PostRequest, CreateRequestInit {
  advertiser_id?: KuaishouId;
  campaign_id?: KuaishouId;
  unit_name?: string;
  put_status?: number;
  bid_type?: number;
  bid?: KuaishouId;
  cpa_bid?: KuaishouId;
  ocpx_action_type?: number;
  deep_conversion_type?: number;
  enhance_conversion_type?: number;
  roi_ratio?: number;
  deep_conversion_bid?: KuaishouId;
  scene_id?: number[];
  unit_type?: number;
  begin_time?: string;
  end_time?: string;
  schedule_time?: string;
  day_budget?: number;
  day_budget_schedule?: number;
  convert_id?: number;
  url_type?: number;
  web_url_type?: number;
  url?: string;
  site_id?: KuaishouId;
  group_id?: KuaishouId;
  schema_uri?: string;
  schema_id?: string;
  app_id?: KuaishouId;
  app_download_type?: number;
  download_page_url?: string;
  use_app_market?: number;
  app_store?: string[];
  show_mode?: number;
  site_type?: number;
  smart_cover?: boolean;
  asset_mining?: boolean;
  consult_id?: KuaishouId;
  adv_card_option?: number;
  adv_card_list?: number[];
  playable_id?: KuaishouId;
  play_button?: string;
  dpa_unit_param?: DpaUnitParam;
  jingle_bell_id?: KuaishouId;
  live_user_id?: KuaishouId;
  conversion_type?: number;
  extend_search?: boolean;
  custom_mini_app_data?: CustomMiniAppData;
  target?: Target;
  template_id?: KuaishouId;
  outer_loop_native?: number;
  quick_search?: number;
  target_explore?: number;
  negative_word_param?: NegativeWordParam;
  package_id?: KuaishouId;
  series_id?: KuaishouId;
  episode_id?: KuaishouId;
  series_card_type?: number;
  series_card_info?: SeriesCardInfo;
  series_pay_template_id?: KuaishouId;
  series_pay_mode?: number;
  u_link?: string;

  constructor(init: CreateRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.campaign_id = init.campaign_id;
    this.unit_name = init.unit_name;
    this.put_status = init.put_status;
    this.bid_type = init.bid_type;
    this.bid = init.bid;
    this.cpa_bid = init.cpa_bid;
    this.ocpx_action_type = init.ocpx_action_type;
    this.deep_conversion_type = init.deep_conversion_type;
    this.enhance_conversion_type = init.enhance_conversion_type;
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
    this.site_id = init.site_id;
    this.group_id = init.group_id;
    this.schema_uri = init.schema_uri;
    this.schema_id = init.schema_id;
    this.app_id = init.app_id;
    this.app_download_type = init.app_download_type;
    this.download_page_url = init.download_page_url;
    this.use_app_market = init.use_app_market;
    this.app_store = init.app_store;
    this.show_mode = init.show_mode;
    this.site_type = init.site_type;
    this.smart_cover = init.smart_cover;
    this.asset_mining = init.asset_mining;
    this.consult_id = init.consult_id;
    this.adv_card_option = init.adv_card_option;
    this.adv_card_list = init.adv_card_list;
    this.playable_id = init.playable_id;
    this.play_button = init.play_button;
    this.dpa_unit_param = init.dpa_unit_param;
    this.jingle_bell_id = init.jingle_bell_id;
    this.live_user_id = init.live_user_id;
    this.conversion_type = init.conversion_type;
    this.extend_search = init.extend_search;
    this.custom_mini_app_data = init.custom_mini_app_data;
    this.target = init.target;
    this.template_id = init.template_id;
    this.outer_loop_native = init.outer_loop_native;
    this.quick_search = init.quick_search;
    this.target_explore = init.target_explore;
    this.negative_word_param = init.negative_word_param;
    this.package_id = init.package_id;
    this.series_id = init.series_id;
    this.episode_id = init.episode_id;
    this.series_card_type = init.series_card_type;
    this.series_card_info = init.series_card_info;
    this.series_pay_template_id = init.series_pay_template_id;
    this.series_pay_mode = init.series_pay_mode;
    this.u_link = init.u_link;
  }

  path() {
    return "gw/dsp/unit/create";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      campaign_id: this.campaign_id,
      unit_name: this.unit_name,
      put_status: this.put_status,
      bid_type: this.bid_type,
      bid: this.bid,
      cpa_bid: this.cpa_bid,
      ocpx_action_type: this.ocpx_action_type,
      deep_conversion_type: this.deep_conversion_type,
      enhance_conversion_type: this.enhance_conversion_type,
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
      site_id: this.site_id,
      group_id: this.group_id,
      schema_uri: this.schema_uri,
      schema_id: this.schema_id,
      app_id: this.app_id,
      app_download_type: this.app_download_type,
      download_page_url: this.download_page_url,
      use_app_market: this.use_app_market,
      app_store: this.app_store,
      show_mode: this.show_mode,
      site_type: this.site_type,
      smart_cover: this.smart_cover,
      asset_mining: this.asset_mining,
      consult_id: this.consult_id,
      adv_card_option: this.adv_card_option,
      adv_card_list: this.adv_card_list,
      playable_id: this.playable_id,
      play_button: this.play_button,
      dpa_unit_param: this.dpa_unit_param,
      jingle_bell_id: this.jingle_bell_id,
      live_user_id: this.live_user_id,
      conversion_type: this.conversion_type,
      extend_search: this.extend_search,
      custom_mini_app_data: this.custom_mini_app_data,
      target: this.target,
      template_id: this.template_id,
      outer_loop_native: this.outer_loop_native,
      quick_search: this.quick_search,
      target_explore: this.target_explore,
      negative_word_param: this.negative_word_param,
      package_id: this.package_id,
      series_id: this.series_id,
      episode_id: this.episode_id,
      series_card_type: this.series_card_type,
      series_card_info: this.series_card_info,
      series_pay_template_id: this.series_pay_template_id,
      series_pay_mode: this.series_pay_mode,
      u_link: this.u_link,
    });
  }
}

export interface CreateResponse {
  unit_id?: KuaishouId;
}
