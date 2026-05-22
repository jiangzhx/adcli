// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_element_button_link_spec.go
// Do not edit manually.

import type { DeepLinkAppAndroidSpec, DeepLinkAppIosSpec, SimplifyMiniProgramSpec } from "../v3/index";

export interface ElementButtonLinkSpec {
  title?: string;
  url?: string;
  deep_link_android_spec?: DeepLinkAppAndroidSpec;
  deep_link_ios_spec?: DeepLinkAppIosSpec;
  mini_program_spec?: SimplifyMiniProgramSpec;
}

