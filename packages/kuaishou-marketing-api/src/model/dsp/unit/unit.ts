// Generated from github.com/bububa/kwai-marketing-api/model/dsp/unit/unit.go
// Do not edit manually.

import type { KuaishouId } from "../../types";
import type { Target } from "./target";

export interface Unit {
  campaign_id?: KuaishouId;
  unit_id?: KuaishouId;
  unit_name?: string;
  put_status?: number;
  status?: number;
  review_detail?: string;
  study_status?: number;
  compensate_status?: number;
  bid_type?: number;
  bid?: KuaishouId;
  cpa_bid?: KuaishouId;
  ocpx_action_type?: number;
  deep_conversion_type?: number;
  deep_conversion_bid?: KuaishouId;
  enhance_conversion_type?: number;
  roi_ratio?: number;
  scene_id?: number[];
  unit_type?: number;
  begin_time?: string;
  end_time?: string;
  schedule?: UnitSchedule;
  schedule_time?: string;
  day_budget?: number;
  day_budget_schedule?: number[];
  convert_id?: number;
  url_type?: number;
  web_url_type?: number;
  url?: string;
  site_id?: KuaishouId;
  page_group_detail?: PageGroupDetail;
  schema_uri?: string;
  schema_id?: string;
  app_id?: KuaishouId;
  app_download_type?: number;
  download_page_url?: string;
  use_app_market?: number;
  app_store?: string[];
  diverse_data?: DiverseData;
  show_mode?: number;
  site_type?: number;
  smart_cover?: boolean;
  asset_mining?: boolean;
  consult_id?: KuaishouId;
  adv_card_option?: number;
  adv_card_list?: number[];
  playable_id?: KuaishouId;
  play_button?: string;
  playable_orientation?: number;
  playable_file_name?: string;
  dpa_unit_sub_type?: number;
  library_id?: KuaishouId;
  outer_id?: string;
  dpa_outer_ids?: string[];
  dpa_category_ids?: string[];
  dpa_dynamic_params?: number;
  dpa_dynamic_params_for_dp?: string;
  dpa_dynamic_params_for_url?: string;
  product_name?: string;
  product_price?: number;
  product_image?: string;
  jingle_bell_id?: KuaishouId;
  live_user_id?: KuaishouId;
  extend_search?: boolean;
  custom_mini_app_data?: CustomMiniAppData;
  target?: Target;
  template_id?: KuaishouId;
  outer_loop_native?: number;
  quick_search?: number;
  target_explore?: number;
  negative_word_param?: NegativeWordParam;
  backflow_forcast?: BackflowForcast;
  ad_type?: number;
  unit_source?: number;
  update_time?: string;
  package_id?: KuaishouId;
  series_id?: KuaishouId;
  episode_id?: KuaishouId;
  series_card_type?: number;
  series_card_info?: SeriesCardInfo;
  series_pay_template_id?: KuaishouId;
  series_pay_mode?: number;
  u_link?: string;
  unit_material_type?: number;
}

export interface DpaUnitParam {
  dpa_unit_sub_type?: number;
  library_id?: KuaishouId;
  product_id?: string;
  outer_id?: string;
  click_url?: string;
  actionbar_click_url?: string;
  impression_url?: string;
  dpa_outer_ids?: string[];
  dpa_category_ids?: string[];
  dpa_dynamic_params?: number;
  dpa_dynamic_params_for_dp?: string;
  dpa_dynamic_params_for_url?: string;
}

export interface CustomMiniAppData {
  mini_app_type?: number;
  mini_app_id_platform?: string;
  bootstrap_page?: string;
  bootstrap_params?: string;
}

export interface NegativeWordParam {
  exact_words?: string[];
  phrase_words?: string[];
}

export interface SeriesCardInfo {
  pic_id?: KuaishouId;
  label?: string[];
  description?: string;
}

export interface PageGroupDetail {
  group_id?: KuaishouId;
  group_name?: string;
  page_review_detail?: PageReviewDetail[];
}

export interface PageReviewDetail {
  page_id?: KuaishouId;
  review_status?: number;
  review_detail?: string;
  url?: string;
}

export interface DiverseData {
  app_name?: string;
  app_package_name?: string;
  device_os_type?: number;
}

export interface BackflowForcast {
  backflow_cv_lower?: number;
  backflow_cv_upper?: number;
  backflow_timestamp?: number;
  backflow_payment?: number;
  backflow_roi?: number;
}

export interface UnitSchedule {
  mon?: number[];
  tues?: number[];
  wed?: number[];
  thur?: number[];
  fri?: number[];
  sat?: number[];
  sun?: number[];
}
