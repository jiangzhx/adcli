// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsSiteCreateV2RequestBricksInnerBackground, ToolsSiteCreateV2RequestBricksInnerCommentsInner, ToolsSiteCreateV2RequestBricksInnerElementsInner, ToolsSiteCreateV2RequestBricksInnerEventsInner, ToolsSiteCreateV2RequestBricksInnerFailureLink, ToolsSiteCreateV2RequestBricksInnerFormData, ToolsSiteCreateV2RequestBricksInnerGroupContentInner, ToolsSiteCreateV2RequestBricksInnerLink, ToolsSiteCreateV2RequestBricksInnerLocalSource, ToolsSiteCreateV2RequestBricksInnerMarquee, ToolsSiteCreateV2RequestBricksInnerOnlineSource, ToolsSiteCreateV2RequestBricksInnerPackageInfo, ToolsSiteCreateV2RequestBricksInnerRewardsInner, ToolsSiteCreateV2RequestBricksInnerRuleText, ToolsSiteCreateV2RequestBricksInnerSetting, ToolsSiteCreateV2RequestBricksInnerSuccessLink } from "../models";

export interface ToolsSiteCreateV2RequestBricksInner {
  auto_play?: number;
  background?: ToolsSiteCreateV2RequestBricksInnerBackground;
  bg_color?: string;
  bg_image?: string;
  bg_type?: string;
  border_color?: string;
  border_radius?: number;
  border_width?: number;
  bulb_effect?: boolean;
  color?: string;
  comments?: ToolsSiteCreateV2RequestBricksInnerCommentsInner[];
  content?: string;
  elements?: ToolsSiteCreateV2RequestBricksInnerElementsInner[];
  events?: ToolsSiteCreateV2RequestBricksInnerEventsInner[];
  failure_link?: ToolsSiteCreateV2RequestBricksInnerFailureLink;
  float?: string;
  font_family?: string;
  font_size?: number;
  font_style?: string[];
  form_data?: ToolsSiteCreateV2RequestBricksInnerFormData;
  game_path?: string;
  group_content?: ToolsSiteCreateV2RequestBricksInnerGroupContentInner[];
  group_type?: string;
  height?: number;
  ic_id?: string;
  icon?: string;
  image_url?: string;
  instance_id?: number;
  is_cover?: number;
  letter_spacing?: number;
  line_height?: number;
  link?: ToolsSiteCreateV2RequestBricksInnerLink;
  linkable?: number;
  local_source?: ToolsSiteCreateV2RequestBricksInnerLocalSource;
  marquee?: ToolsSiteCreateV2RequestBricksInnerMarquee;
  name: string;
  offset_x?: number;
  offset_y?: number;
  online_source?: ToolsSiteCreateV2RequestBricksInnerOnlineSource;
  package_info?: ToolsSiteCreateV2RequestBricksInnerPackageInfo;
  rewards?: ToolsSiteCreateV2RequestBricksInnerRewardsInner[];
  rewards_button_text?: string;
  rewards_button_text_color?: string;
  rewards_button_text_font_size?: number;
  rule_text?: ToolsSiteCreateV2RequestBricksInnerRuleText;
  setting?: ToolsSiteCreateV2RequestBricksInnerSetting;
  success_link?: ToolsSiteCreateV2RequestBricksInnerSuccessLink;
  success_tip?: string;
  text?: string;
  text_align?: string;
  width?: number;
  x?: number;
  y?: number;
}

