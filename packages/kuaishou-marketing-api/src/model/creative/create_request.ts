// Generated from github.com/bububa/kwai-marketing-api/model/creative/create_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface CreateRequestInit {
  advertiser_id?: KuaishouId;
  unit_id?: KuaishouId;
  creative_name?: string;
  put_status?: number;
  photo_id?: string;
  image_token?: string;
  creative_material_type?: number;
  image_tokens?: string[];
  action_bar_text?: string;
  description?: string;
  short_slogan?: string;
  sticker_title?: string;
  overlay_type?: string;
  expose_tag?: string;
  new_expose_tag?: string[];
  site_id?: KuaishouId;
  click_track_url?: string;
  impression_url?: string;
  ad_photo_played_t3s_url?: string;
  actionbar_click_url?: string;
  creative_category?: number;
  creative_tag?: string[];
  live_creative_type?: number;
}

export class CreateRequest implements PostRequest, CreateRequestInit {
  advertiser_id?: KuaishouId;
  unit_id?: KuaishouId;
  creative_name?: string;
  put_status?: number;
  photo_id?: string;
  image_token?: string;
  creative_material_type?: number;
  image_tokens?: string[];
  action_bar_text?: string;
  description?: string;
  short_slogan?: string;
  sticker_title?: string;
  overlay_type?: string;
  expose_tag?: string;
  new_expose_tag?: string[];
  site_id?: KuaishouId;
  click_track_url?: string;
  impression_url?: string;
  ad_photo_played_t3s_url?: string;
  actionbar_click_url?: string;
  creative_category?: number;
  creative_tag?: string[];
  live_creative_type?: number;

  constructor(init: CreateRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.unit_id = init.unit_id;
    this.creative_name = init.creative_name;
    this.put_status = init.put_status;
    this.photo_id = init.photo_id;
    this.image_token = init.image_token;
    this.creative_material_type = init.creative_material_type;
    this.image_tokens = init.image_tokens;
    this.action_bar_text = init.action_bar_text;
    this.description = init.description;
    this.short_slogan = init.short_slogan;
    this.sticker_title = init.sticker_title;
    this.overlay_type = init.overlay_type;
    this.expose_tag = init.expose_tag;
    this.new_expose_tag = init.new_expose_tag;
    this.site_id = init.site_id;
    this.click_track_url = init.click_track_url;
    this.impression_url = init.impression_url;
    this.ad_photo_played_t3s_url = init.ad_photo_played_t3s_url;
    this.actionbar_click_url = init.actionbar_click_url;
    this.creative_category = init.creative_category;
    this.creative_tag = init.creative_tag;
    this.live_creative_type = init.live_creative_type;
  }

  path() {
    return "v2/creative/create";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      unit_id: this.unit_id,
      creative_name: this.creative_name,
      put_status: this.put_status,
      photo_id: this.photo_id,
      image_token: this.image_token,
      creative_material_type: this.creative_material_type,
      image_tokens: this.image_tokens,
      action_bar_text: this.action_bar_text,
      description: this.description,
      short_slogan: this.short_slogan,
      sticker_title: this.sticker_title,
      overlay_type: this.overlay_type,
      expose_tag: this.expose_tag,
      new_expose_tag: this.new_expose_tag,
      site_id: this.site_id,
      click_track_url: this.click_track_url,
      impression_url: this.impression_url,
      ad_photo_played_t3s_url: this.ad_photo_played_t3s_url,
      actionbar_click_url: this.actionbar_click_url,
      creative_category: this.creative_category,
      creative_tag: this.creative_tag,
      live_creative_type: this.live_creative_type,
    });
  }
}
