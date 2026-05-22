// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_fixed_button_config.go
// Do not edit manually.

import type { ConvertInfoConfigDownload, ConvertInfoConfigFollowVideo, ConvertInfoConfigLink, ConvertInfoConfigMiniProgram, ConvertInfoConfigOfficialAccount, ConvertInfoConfigUnknown } from "../v3/index";

export interface FixedButtonConfig {
  icon_material_id?: string;
  icon_shape?: string;
  title?: string;
  desc?: string;
  button_content?: string;
  title_color?: string;
  desc_color?: string;
  button_font_color?: string;
  button_background_color?: string;
  background_color?: string;
  convert_unknown?: ConvertInfoConfigUnknown;
  convert_download?: ConvertInfoConfigDownload;
  convert_link?: ConvertInfoConfigLink;
  convert_weapp?: ConvertInfoConfigMiniProgram;
  convert_gh?: ConvertInfoConfigOfficialAccount;
  convert_followVideo?: ConvertInfoConfigFollowVideo;
}

