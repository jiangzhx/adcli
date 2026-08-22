// Generated from github.com/bububa/kwai-marketing-api/model/creative/creative.go
// Do not edit manually.

import type { KuaishouId } from "../types";
import type { DisplayInfo } from "./display_info";
import type { ProgrammedCreativeMaterial } from "./programmed_creative_material";

export interface Creative {
  campaign_id?: KuaishouId;
  unit_id?: number;
  creative_id?: KuaishouId;
  creative_name?: string;
  creative_material_type?: number;
  photo_id?: string;
  material_url?: string[];
  image_tokens?: string[];
  status?: number;
  put_status?: number;
  create_channel?: number;
  review_detail?: string;
  reject_video_snapshot?: string[];
  cover_url?: string;
  image_token?: string;
  first_frame_type?: number;
  cover_width?: number;
  cover_height?: number;
  overlay_bg_url?: string;
  overlay_bg_image_token?: string;
  sticker_title?: string;
  overlay_type?: string;
  display_info?: DisplayInfo;
  short_slogan?: string;
  expose_tag?: string;
  new_expose_tag?: NewExposeTag[];
  site_id?: KuaishouId;
  click_track_url?: string;
  impression_url?: string;
  ad_photo_played_t3s_url?: string;
  programmed_creative_material?: ProgrammedCreativeMaterial;
  creative_status_type?: number;
  create_time?: string;
  update_time?: string;
  actionbar_click_url?: string;
  creative_category?: number;
  creative_tag?: string[];
  merchant_library_id?: number;
  merchant_product_id?: string;
  ad_type?: number;
}

export interface NewExposeTag {
  text?: string;
  url?: string;
}
