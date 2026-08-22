// Generated from github.com/bububa/kwai-marketing-api/model/dsp/creative/batch_update.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";
import type { NewExposeTag } from "./creative";

export interface BatchUpdateRequestInit {
  advertiser_id?: KuaishouId;
  unit_id?: KuaishouId;
  click_track_url?: string;
  impression_url?: string;
  ad_photo_played_t3s_url?: string;
  actionbar_click_url?: string;
  creative_category?: number;
  creative_tag?: string[];
  material_intelligent_optimize?: number;
  creative_id?: KuaishouId;
  creative_name?: string;
  photo_id?: string;
  image_token?: string;
  dpa_template_id?: KuaishouId;
  image_tokens?: string[];
  action_bar_text?: string;
  description?: string;
  new_expose_tag?: NewExposeTag[];
  splash_photo_ids?: string[];
  splash_image_tokens?: string[];
  dpa_style_types?: number[];
  outer_loop_native?: number;
  kol_user_type?: number;
  kol_user_id?: KuaishouId;
  recommendation?: string;
}

export class BatchUpdateRequest implements PostRequest, BatchUpdateRequestInit {
  advertiser_id?: KuaishouId;
  unit_id?: KuaishouId;
  click_track_url?: string;
  impression_url?: string;
  ad_photo_played_t3s_url?: string;
  actionbar_click_url?: string;
  creative_category?: number;
  creative_tag?: string[];
  material_intelligent_optimize?: number;
  creative_id?: KuaishouId;
  creative_name?: string;
  photo_id?: string;
  image_token?: string;
  dpa_template_id?: KuaishouId;
  image_tokens?: string[];
  action_bar_text?: string;
  description?: string;
  new_expose_tag?: NewExposeTag[];
  splash_photo_ids?: string[];
  splash_image_tokens?: string[];
  dpa_style_types?: number[];
  outer_loop_native?: number;
  kol_user_type?: number;
  kol_user_id?: KuaishouId;
  recommendation?: string;

  constructor(init: BatchUpdateRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.unit_id = init.unit_id;
    this.click_track_url = init.click_track_url;
    this.impression_url = init.impression_url;
    this.ad_photo_played_t3s_url = init.ad_photo_played_t3s_url;
    this.actionbar_click_url = init.actionbar_click_url;
    this.creative_category = init.creative_category;
    this.creative_tag = init.creative_tag;
    this.material_intelligent_optimize = init.material_intelligent_optimize;
    this.creative_id = init.creative_id;
    this.creative_name = init.creative_name;
    this.photo_id = init.photo_id;
    this.image_token = init.image_token;
    this.dpa_template_id = init.dpa_template_id;
    this.image_tokens = init.image_tokens;
    this.action_bar_text = init.action_bar_text;
    this.description = init.description;
    this.new_expose_tag = init.new_expose_tag;
    this.splash_photo_ids = init.splash_photo_ids;
    this.splash_image_tokens = init.splash_image_tokens;
    this.dpa_style_types = init.dpa_style_types;
    this.outer_loop_native = init.outer_loop_native;
    this.kol_user_type = init.kol_user_type;
    this.kol_user_id = init.kol_user_id;
    this.recommendation = init.recommendation;
  }

  path() {
    return "gw/dsp/creative/batch_update";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      unit_id: this.unit_id,
      click_track_url: this.click_track_url,
      impression_url: this.impression_url,
      ad_photo_played_t3s_url: this.ad_photo_played_t3s_url,
      actionbar_click_url: this.actionbar_click_url,
      creative_category: this.creative_category,
      creative_tag: this.creative_tag,
      material_intelligent_optimize: this.material_intelligent_optimize,
      creative_id: this.creative_id,
      creative_name: this.creative_name,
      photo_id: this.photo_id,
      image_token: this.image_token,
      dpa_template_id: this.dpa_template_id,
      image_tokens: this.image_tokens,
      action_bar_text: this.action_bar_text,
      description: this.description,
      new_expose_tag: this.new_expose_tag,
      splash_photo_ids: this.splash_photo_ids,
      splash_image_tokens: this.splash_image_tokens,
      dpa_style_types: this.dpa_style_types,
      outer_loop_native: this.outer_loop_native,
      kol_user_type: this.kol_user_type,
      kol_user_id: this.kol_user_id,
      recommendation: this.recommendation,
    });
  }
}

export interface BatchUpdateResponse {
  update_creative_ids?: KuaishouId[];
  add_creative_ids?: KuaishouId[];
}
