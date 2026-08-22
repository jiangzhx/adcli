// Generated from github.com/bububa/kwai-marketing-api/model/creative/advanced_program_creative.go
// Do not edit manually.

import type { KuaishouId } from "../types";

export interface AdvancedProgramCreative {
  unit_id?: number;
  package_name?: string;
  horizontal_photo_ids?: string[];
  vertical_photo_ids?: string[];
  cover_image_tokens?: string[];
  cover_image_urls?: string[];
  site_id?: KuaishouId;
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
}
