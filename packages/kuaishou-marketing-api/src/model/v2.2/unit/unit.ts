// Generated from github.com/bububa/kwai-marketing-api/model/v2.2/unit/unit.go
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
  schedule?: unknown;
  schedule_time?: string;
  day_budget?: number;
  day_budget_schedule?: number[];
  convert_id?: number;
  url_type?: number;
  web_uri_type?: number;
  url?: string;
  site_id?: KuaishouId;
  group_id?: KuaishouId;
  page_group_detail?: PageGroup;
  schema_uri?: string;
  schema_id?: string;
  app_id?: KuaishouId;
  app_download_type?: number;
  use_app_market?: number;
  app_store?: string[];
  diverse_data?: DiverseData;
  show_mode?: number;
  site_type?: number;
  smart_cover?: boolean;
  asset_mining?: boolean;
  consult_id?: KuaishouId;
  adv_card_option?: number;
  adv_card_list?: unknown[];
  playable_id?: KuaishouId;
  play_button?: string;
  playable_orientation?: number;
  playable_file_name?: string;
  dpa_unit_sub_type?: number;
  library_id?: number;
  outer_id?: string;
  dpa_outer_ids?: string[];
  dpa_category_ids?: string[];
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
  negative_word?: AdMarketNegativeWordParam;
  backflow_forecast?: Uint8Array;
  ad_type?: number;
  unit_source?: number;
  create_time?: string;
  update_time?: string;
  package_id?: KuaishouId;
}

export interface PageReviewDetail {
  page_id?: KuaishouId;
  review_status?: string;
  url?: string;
  review_detail?: string;
}

export interface PageGroup {
  group_id?: KuaishouId;
  group_name?: string;
  page_review_detail?: PageReviewDetail[];
}

export interface DiverseData {
  app_name?: string;
  app_package_name?: string;
  device_os_type?: number;
}

export interface AdMarketNegativeWordParam {
  exact_words?: string[];
  phrase_words?: string[];
}

export interface CustomMiniAppData {
  mini_app_id_platform?: string;
  bootstrap_page?: string;
  bootstrap_params?: string;
}
