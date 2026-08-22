// Generated from github.com/bububa/kwai-marketing-api/model/creative/advanced_program_update_request.go
// Do not edit manually.

import type { PostRequest } from "../request";
import type { KuaishouId } from "../types";
import { jsonMarshal } from "../types";
import type { Photo } from "./photo";

export interface AdvancedProgramUpdateRequestInit {
  advertiser_id?: KuaishouId;
  unit_id?: KuaishouId;
  package_name?: string;
  horizontal_photo_ids?: string[];
  vertical_photo_ids?: string[];
  cover_image_tokens?: string[];
  site_id?: KuaishouId;
  sticker_styles?: number[];
  cover_slogans?: string[];
  action_bar?: string;
  captions?: string[];
  click_url?: string;
  actionbar_click_url?: string;
  creative_category?: number;
  photo_list?: Photo[];
}

export class AdvancedProgramUpdateRequest implements PostRequest, AdvancedProgramUpdateRequestInit {
  advertiser_id?: KuaishouId;
  unit_id?: KuaishouId;
  package_name?: string;
  horizontal_photo_ids?: string[];
  vertical_photo_ids?: string[];
  cover_image_tokens?: string[];
  site_id?: KuaishouId;
  sticker_styles?: number[];
  cover_slogans?: string[];
  action_bar?: string;
  captions?: string[];
  click_url?: string;
  actionbar_click_url?: string;
  creative_category?: number;
  photo_list?: Photo[];

  constructor(init: AdvancedProgramUpdateRequestInit = {}) {
    this.advertiser_id = init.advertiser_id;
    this.unit_id = init.unit_id;
    this.package_name = init.package_name;
    this.horizontal_photo_ids = init.horizontal_photo_ids;
    this.vertical_photo_ids = init.vertical_photo_ids;
    this.cover_image_tokens = init.cover_image_tokens;
    this.site_id = init.site_id;
    this.sticker_styles = init.sticker_styles;
    this.cover_slogans = init.cover_slogans;
    this.action_bar = init.action_bar;
    this.captions = init.captions;
    this.click_url = init.click_url;
    this.actionbar_click_url = init.actionbar_click_url;
    this.creative_category = init.creative_category;
    this.photo_list = init.photo_list;
  }

  path() {
    return "creative/advanced/program/update";
  }

  encode() {
    return jsonMarshal({
      advertiser_id: this.advertiser_id,
      unit_id: this.unit_id,
      package_name: this.package_name,
      horizontal_photo_ids: this.horizontal_photo_ids,
      vertical_photo_ids: this.vertical_photo_ids,
      cover_image_tokens: this.cover_image_tokens,
      site_id: this.site_id,
      sticker_styles: this.sticker_styles,
      cover_slogans: this.cover_slogans,
      action_bar: this.action_bar,
      captions: this.captions,
      click_url: this.click_url,
      actionbar_click_url: this.actionbar_click_url,
      creative_category: this.creative_category,
      photo_list: this.photo_list,
    });
  }
}
