// Generated from github.com/bububa/kwai-marketing-api/model/dsp/creative/advanced_creative_update.go
// Do not edit manually.

import type { PostRequest } from "../../request";
import type { KuaishouId } from "../../types";
import { jsonMarshal } from "../../types";
import type { NewExposeTag, Photo } from "./creative";

export interface AdvancedCreativeUpdateRequestInit {
  advertiser_id?: KuaishouId;
  unit_id?: KuaishouId;
  package_name?: string;
  sticker_styles?: number[];
  cover_slogans?: string[];
  action_bar?: string;
  captions?: string[];
  click_url?: string;
  impression_url?: string;
  actionbar_click_url?: string;
  ad_photo_played_t3s_url?: string;
  creative_category?: number;
  creative_tag?: string[];
  photo_list?: Photo[];
  pic_list?: string[];
  new_expose_tag?: NewExposeTag[];
  material_intelligent_optimize?: number;
}

export class AdvancedCreativeUpdateRequest implements PostRequest, AdvancedCreativeUpdateRequestInit {
  advertiser_id?: KuaishouId;
  unit_id?: KuaishouId;
  package_name?: string;
  sticker_styles?: number[];
  cover_slogans?: string[];
  action_bar?: string;
  captions?: string[];
  click_url?: string;
  impression_url?: string;
  actionbar_click_url?: string;
  ad_photo_played_t3s_url?: string;
  creative_category?: number;
  creative_tag?: string[];
  photo_list?: Photo[];
  pic_list?: string[];
  new_expose_tag?: NewExposeTag[];
  material_intelligent_optimize?: number;

  constructor(init: AdvancedCreativeUpdateRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.unit_id = init.unit_id;
    this.package_name = init.package_name;
    this.sticker_styles = init.sticker_styles;
    this.cover_slogans = init.cover_slogans;
    this.action_bar = init.action_bar;
    this.captions = init.captions;
    this.click_url = init.click_url;
    this.impression_url = init.impression_url;
    this.actionbar_click_url = init.actionbar_click_url;
    this.ad_photo_played_t3s_url = init.ad_photo_played_t3s_url;
    this.creative_category = init.creative_category;
    this.creative_tag = init.creative_tag;
    this.photo_list = init.photo_list;
    this.pic_list = init.pic_list;
    this.new_expose_tag = init.new_expose_tag;
    this.material_intelligent_optimize = init.material_intelligent_optimize;
  }

  path() {
    return "gw/dsp/advanced_creative/update";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      unit_id: this.unit_id,
      package_name: this.package_name,
      sticker_styles: this.sticker_styles,
      cover_slogans: this.cover_slogans,
      action_bar: this.action_bar,
      captions: this.captions,
      click_url: this.click_url,
      impression_url: this.impression_url,
      actionbar_click_url: this.actionbar_click_url,
      ad_photo_played_t3s_url: this.ad_photo_played_t3s_url,
      creative_category: this.creative_category,
      creative_tag: this.creative_tag,
      photo_list: this.photo_list,
      pic_list: this.pic_list,
      new_expose_tag: this.new_expose_tag,
      material_intelligent_optimize: this.material_intelligent_optimize,
    });
  }
}

export interface AdvancedCreativeUpdateResponse {
  unit_id?: KuaishouId;
}
