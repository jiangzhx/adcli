// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ToolsSiteUpdateV2RequestBricksInnerBackground, ToolsSiteUpdateV2RequestBricksInnerCommentsInner, ToolsSiteUpdateV2RequestBricksInnerElementsInner, ToolsSiteUpdateV2RequestBricksInnerEventsInner, ToolsSiteUpdateV2RequestBricksInnerFailureLink, ToolsSiteUpdateV2RequestBricksInnerFormData, ToolsSiteUpdateV2RequestBricksInnerGroupContentInner, ToolsSiteUpdateV2RequestBricksInnerLink, ToolsSiteUpdateV2RequestBricksInnerLocalSource, ToolsSiteUpdateV2RequestBricksInnerMarquee, ToolsSiteUpdateV2RequestBricksInnerOnlineSource, ToolsSiteUpdateV2RequestBricksInnerPackageInfo, ToolsSiteUpdateV2RequestBricksInnerRewardsInner, ToolsSiteUpdateV2RequestBricksInnerRuleText, ToolsSiteUpdateV2RequestBricksInnerSetting, ToolsSiteUpdateV2RequestBricksInnerSuccessLink } from "../models";

export interface ToolsSiteUpdateV2RequestBricksInner {
  auto_play?: number;
  background?: ToolsSiteUpdateV2RequestBricksInnerBackground;
  bg_color?: string;
  bg_image?: string;
  bg_type?: string;
  border_color?: string;
  border_radius?: number;
  border_width?: number;
  bulb_effect?: boolean;
  color?: string;
  comments?: ToolsSiteUpdateV2RequestBricksInnerCommentsInner[];
  content?: string;
  elements?: ToolsSiteUpdateV2RequestBricksInnerElementsInner[];
  events?: ToolsSiteUpdateV2RequestBricksInnerEventsInner[];
  failure_link?: ToolsSiteUpdateV2RequestBricksInnerFailureLink;
  float?: string;
  font_family?: string;
  font_size?: number;
  font_style?: string[];
  form_data?: ToolsSiteUpdateV2RequestBricksInnerFormData;
  game_path?: string;
  group_content?: ToolsSiteUpdateV2RequestBricksInnerGroupContentInner[];
  group_type?: string;
  height?: number;
  ic_id?: string;
  icon?: string;
  image_url?: string;
  instance_id?: number | string;
  is_cover?: number;
  letter_spacing?: number;
  line_height?: number;
  link?: ToolsSiteUpdateV2RequestBricksInnerLink;
  linkable?: number;
  local_source?: ToolsSiteUpdateV2RequestBricksInnerLocalSource;
  marquee?: ToolsSiteUpdateV2RequestBricksInnerMarquee;
  name: string;
  offset_x?: number;
  offset_y?: number;
  online_source?: ToolsSiteUpdateV2RequestBricksInnerOnlineSource;
  package_info?: ToolsSiteUpdateV2RequestBricksInnerPackageInfo;
  rewards?: ToolsSiteUpdateV2RequestBricksInnerRewardsInner[];
  rewards_button_text?: string;
  rewards_button_text_color?: string;
  rewards_button_text_font_size?: number;
  rule_text?: ToolsSiteUpdateV2RequestBricksInnerRuleText;
  setting?: ToolsSiteUpdateV2RequestBricksInnerSetting;
  success_link?: ToolsSiteUpdateV2RequestBricksInnerSuccessLink;
  success_tip?: string;
  text?: string;
  text_align?: string;
  width?: number;
  x?: number;
  y?: number;
}

