// Generated from github.com/bububa/kwai-marketing-api/model/v2.2/creative/advanced_creative.go
// Do not edit manually.

import type { KuaishouId } from "../../types";

export interface AdvancedCreative {
  unit_id?: KuaishouId;
  package_name?: string;
  horizontal_photo_ids?: string[];
  vertical_photo_ids?: string[];
  cover_image_tokens?: string[];
  cover_image_urls?: string[];
  sticker_styles?: number[];
  cover_slogans?: string[];
  action_bar?: string;
  captions?: string[];
  click_url?: string;
  actionbar_click_url?: string;
  put_status?: number;
  view_status?: number;
  view_status_reason?: string;
  create_time?: string;
  update_time?: string;
  creatives?: Creatives[];
  pic_ids?: string[];
  app_grade_type?: number;
  pic_list?: string[];
  pic_url_list?: string[];
  photo_list?: Photo[];
  ad_photo_played_t3s_url?: string;
  creative_category?: number;
  creative_tag?: string[];
  new_expose_tag?: ExposeTag[];
}

export interface Photo {
  photo_id?: KuaishouId;
  cover_image_token?: string;
  creative_material_type?: number;
}

export interface ExposeTag {
  text?: string;
}

export interface Creatives {
  unit_id?: KuaishouId;
  creative_id?: KuaishouId;
}
