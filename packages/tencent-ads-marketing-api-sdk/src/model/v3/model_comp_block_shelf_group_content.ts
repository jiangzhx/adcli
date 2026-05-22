// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_comp_block_shelf_group_content.go
// Do not edit manually.

import type { ConvertInfoConfigDownload, ConvertInfoConfigFollowVideo, ConvertInfoConfigLink, ConvertInfoConfigMiniProgram, ConvertInfoConfigOfficialAccount, ConvertInfoConfigUnknown } from "../v3/index";

export interface CompBlockShelfGroupContent {
  title?: string;
  title_color?: string;
  desc?: string;
  desc_color?: string;
  button_content?: string;
  button_font_color?: string;
  button_background_color?: string;
  card_background_color?: string;
  card_border_color?: string;
  icon_material_id?: string;
  convert_unknown?: ConvertInfoConfigUnknown;
  convert_download?: ConvertInfoConfigDownload;
  convert_link?: ConvertInfoConfigLink;
  convert_weapp?: ConvertInfoConfigMiniProgram;
  convert_gh?: ConvertInfoConfigOfficialAccount;
  convert_followVideo?: ConvertInfoConfigFollowVideo;
}

