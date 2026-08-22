// Generated from github.com/bububa/kwai-marketing-api/model/creative/create_advanced_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";

export interface CreateAdvancedRequestInit {
  advertiser_id?: KuaishouId;
  unit_id?: number;
  package_name?: string;
  site_id?: KuaishouId;
  sticker_styles?: number[];
  cover_slogans?: string[];
  action_bar?: string;
  captions?: string[];
  click_url?: string;
  actionbar_click_url?: string;
  creative_category?: number;
  creative_tag?: string[];
  photo_list?: PhotoItem[];
  pic_list?: string[];
}

export class CreateAdvancedRequest implements PostRequest, CreateAdvancedRequestInit {
  advertiser_id?: KuaishouId;
  unit_id?: number;
  package_name?: string;
  site_id?: KuaishouId;
  sticker_styles?: number[];
  cover_slogans?: string[];
  action_bar?: string;
  captions?: string[];
  click_url?: string;
  actionbar_click_url?: string;
  creative_category?: number;
  creative_tag?: string[];
  photo_list?: PhotoItem[];
  pic_list?: string[];

  constructor(init: CreateAdvancedRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.unit_id = init.unit_id;
    this.package_name = init.package_name;
    this.site_id = init.site_id;
    this.sticker_styles = init.sticker_styles;
    this.cover_slogans = init.cover_slogans;
    this.action_bar = init.action_bar;
    this.captions = init.captions;
    this.click_url = init.click_url;
    this.actionbar_click_url = init.actionbar_click_url;
    this.creative_category = init.creative_category;
    this.creative_tag = init.creative_tag;
    this.photo_list = init.photo_list;
    this.pic_list = init.pic_list;
  }

  path() {
    return "v2/creative/advanced/program/create";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      unit_id: this.unit_id,
      package_name: this.package_name,
      site_id: this.site_id,
      sticker_styles: this.sticker_styles,
      cover_slogans: this.cover_slogans,
      action_bar: this.action_bar,
      captions: this.captions,
      click_url: this.click_url,
      actionbar_click_url: this.actionbar_click_url,
      creative_category: this.creative_category,
      creative_tag: this.creative_tag,
      photo_list: this.photo_list,
      pic_list: this.pic_list,
    });
  }
}

export interface PhotoItem {
  creative_material_type?: number;
  photo_id?: string;
  cover_image_tokens?: string;
}
