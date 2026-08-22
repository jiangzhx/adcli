// Generated from github.com/bububa/kwai-marketing-api/model/dsp/creative/creative.go
// Do not edit manually.

import type { KuaishouId } from "../../types";

export interface Creative {
  campaign_id?: KuaishouId;
  unit_id?: KuaishouId;
  creative_id?: KuaishouId;
  creative_name?: string;
  creative_material_type?: number;
  creative_category?: number;
  creative_tag?: string[];
  photo_id?: string;
  photo_md5?: string;
  material_url?: string[];
  image_tokens?: string[];
  status?: number;
  put_status?: number;
  review_detail?: string;
  review_video_snapshot?: string[];
  cover_url?: string;
  image_token?: string;
  cover_width?: number;
  cover_height?: number;
  overlay_bg_url?: string;
  overlay_bg_image_token?: string;
  sticker_title?: string;
  overlay_type?: string;
  display_info?: DisplayInfo;
  short_slogen?: string;
  expose_tag?: string;
  new_expose_tag?: NewExposeTag[];
  click_track_url?: string;
  impression_url?: string;
  ad_photo_played_t3s_url?: string;
  actionbar_click_url?: string;
  create_time?: string;
  update_time?: string;
  pic_id?: string;
  app_grade_type?: number;
  splash_photos?: SplashPhoto[];
  live_creative_type?: number;
  splash_pictures?: SplashPicture[];
  live_track_url?: string;
  ad_type?: number;
  outer_loop_native?: number;
  kol_user_type?: number;
  kol_user_id?: KuaishouId;
  recommendation?: string;
  dpa_style_types?: number[];
  high_light_flash?: number;
  material_intelligent_optimize?: number;
  creative_mode?: number;
  open_account_native?: number;
}

export interface DisplayInfo {
  description?: string;
  action_bar_text?: string;
}

export interface NewExposeTag {
  text?: string;
  url?: string;
}

export interface Photo {
  photo_id?: KuaishouId;
  cover_image_token?: string;
  creative_material_type?: number;
}

export interface SplashPhoto {
  photo_id?: string;
  photo_md5?: string;
  width?: number;
  height?: number;
}

export interface SplashPicture {
  cover_id?: KuaishouId;
  cover_url?: string;
  height?: number;
  width?: number;
}
