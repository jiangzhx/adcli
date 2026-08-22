// Generated from github.com/bububa/kwai-marketing-api/model/live/report/live_component_report.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";

export interface ListLiveComponentReportRequestInit {
  advertiser_id?: KuaishouId;
  jingle_bell_id?: KuaishouId;
  start_date_min?: string;
  end_date_min?: string;
  start_date?: string;
  end_date?: string;
  temporal_granularity?: string;
  page?: number;
  page_size?: number;
}

export class ListLiveComponentReportRequest implements PostRequest, ListLiveComponentReportRequestInit {
  advertiser_id?: KuaishouId;
  jingle_bell_id?: KuaishouId;
  start_date_min?: string;
  end_date_min?: string;
  start_date?: string;
  end_date?: string;
  temporal_granularity?: string;
  page?: number;
  page_size?: number;

  constructor(init: ListLiveComponentReportRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.jingle_bell_id = init.jingle_bell_id;
    this.start_date_min = init.start_date_min;
    this.end_date_min = init.end_date_min;
    this.start_date = init.start_date;
    this.end_date = init.end_date;
    this.temporal_granularity = init.temporal_granularity;
    this.page = init.page;
    this.page_size = init.page_size;
  }

  path() {
    return "gw/dsp/v1/report/live_component_report";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      jingle_bell_id: this.jingle_bell_id,
      start_date_min: this.start_date_min,
      end_date_min: this.end_date_min,
      start_date: this.start_date,
      end_date: this.end_date,
      temporal_granularity: this.temporal_granularity,
      page: this.page,
      page_size: this.page_size,
    });
  }
}

export interface ListLiveComponentReportResponse {
  total_count?: number;
  details?: LiveComponentReport[];
}

export interface LiveComponentReport {
  charge?: number;
  show?: number;
  aclick?: number;
  bclick?: number;
  share?: number;
  comment?: number;
  like?: number;
  follow?: number;
  report?: number;
  block?: number;
  negative?: number;
  activation?: number;
  submit?: number;
  adScene?: string;
  ad_scene?: string;
  placement_type?: string;
  cancel_follow?: number;
  download_started?: number;
  download_completed?: number;
  photo_click?: number;
  photo_click_ratio?: number;
  action_ratio?: number;
  impression_1k_cost?: number;
  photo_click_cost?: number;
  click_1k_cost?: number;
  action_cost?: number;
  event_pay_first_day?: number;
  event_pay_purchase_amount_first_day?: number;
  event_pay_first_day_roi?: number;
  event_pay?: number;
  event_pay_purchase_amount?: number;
  event_pay_purchase_amount_30_day_by_conversion?: number;
  event_pay_purchase_amount_30_day_by_conversion_roi?: number;
  event_pay_roi?: number;
  event_register?: number;
  event_register_cost?: number;
  event_register_ratio?: number;
  event_jin_jian_app?: number;
  event_jin_jian_app_cost?: number;
  event_credit_grant_app?: number;
  event_credit_grant_app_cost?: number;
  event_credit_grant_app_ratio?: number;
  event_order_paid?: number;
  event_order_paid_purchase_amount?: number;
  event_order_paid_cost?: number;
  form_count?: number;
  form_cost?: number;
  form_action_ratio?: number;
  event_jin_jian_landing_page?: number;
  event_jin_jian_landing_page_cost?: number;
  event_credit_grant_landing_page?: number;
  event_credit_grant_landing_page_cost?: number;
  event_credit_grant_landing_ratio?: number;
  event_next_day_stay_cost?: number;
  event_next_day_stay_ratio?: number;
  event_next_day_stay?: number;
  play_3s_ratio?: number;
  event_valid_clues?: number;
  event_valid_clues_cost?: number;
  ad_product_cnt?: number;
  event_goods_view?: number;
  merchant_reco_fans?: number;
  event_order_amount_roi?: number;
  event_goods_view_cost?: number;
  merchant_reco_fans_cost?: number;
  event_new_user_pay?: number;
  event_new_user_pay_cost?: number;
  event_new_user_pay_ratio?: number;
  event_button_click?: number;
  event_button_click_cost?: number;
  event_button_click_ratio?: number;
  play_5s_ratio?: number;
  play_end_ratio?: number;
  event_order_paid_roi?: number;
  event_new_user_jinjian_app?: number;
  event_new_user_jinjian_app_cost?: number;
  event_new_user_jinjian_app_roi?: number;
  event_new_user_credit_grant_app?: number;
  event_new_user_credit_grant_app_cost?: number;
  event_new_user_credit_grant_app_roi?: number;
  event_new_user_jinjian_page?: number;
  event_new_user_jinjian_page_cost?: number;
  event_new_user_jinjian_page_roi?: number;
  event_new_user_credit_grant_page?: number;
  event_new_user_credit_grant_page_cost?: number;
  event_new_user_credit_grant_page_roi?: number;
  event_appoint_form?: number;
  event_appoint_form_cost?: number;
  event_appoint_form_ratio?: number;
  event_appoint_jump_click?: number;
  event_appoint_jump_click_cost?: number;
  event_appoint_jump_click_ratio?: number;
  event_next_day_stay_new?: number;
  event_next_day_stay_new_cost?: number;
  event_next_day_stay_new_ratio?: number;
  event_multi_pay_seven_day_by_conversion?: number;
  event_multi_pay_seven_day_by_conversion_cost?: number;
  live_room_avg_played_seconds?: number;
  ad_live_share?: number;
  ad_live_comment?: number;
  live_played_started?: number;
  live_played_started_cost?: number;
  ad_live_follow?: number;
  ad_live_follow_cost?: number;
  simple_live_played_started?: number;
  standard_live_played_started?: number;
  conversion_component_impression?: number;
  conversion_component_click?: number;
  conversion_component_rate?: number;
  ad_landing_page_impression?: number;
  ad_app_download_half_impression?: number;
  event_draw_credit_line?: number;
  jingle_bell_id?: KuaishouId;
}
