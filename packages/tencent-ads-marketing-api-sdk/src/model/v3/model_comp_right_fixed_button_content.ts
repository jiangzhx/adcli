// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_comp_right_fixed_button_content.go
// Do not edit manually.

import type { ConvertInfoConfigDownload, ConvertInfoConfigFollowVideo, ConvertInfoConfigLink, ConvertInfoConfigMiniProgram, ConvertInfoConfigOfficialAccount, ConvertInfoConfigUnknown } from "../v3/index";

export interface CompRightFixedButtonContent {
  title?: string;
  title_color?: string;
  button_content?: string;
  button_font_color?: string;
  button_background_color?: string;
  icon_color?: string;
  convert_unknown?: ConvertInfoConfigUnknown;
  convert_download?: ConvertInfoConfigDownload;
  convert_link?: ConvertInfoConfigLink;
  convert_weapp?: ConvertInfoConfigMiniProgram;
  convert_gh?: ConvertInfoConfigOfficialAccount;
  convert_followVideo?: ConvertInfoConfigFollowVideo;
}

