// Generated from tencentad/marketing-api-go-sdk pkg/model/model_element_button_link_spec.go
// Do not edit manually.

import type { DeepLinkAppAndroidSpec, DeepLinkAppIosSpec, SimplifyMiniProgramSpec } from "../model/index";

export interface ElementButtonLinkSpec {
  title?: string;
  url?: string;
  deep_link_android_spec?: DeepLinkAppAndroidSpec;
  deep_link_ios_spec?: DeepLinkAppIosSpec;
  mini_program_spec?: SimplifyMiniProgramSpec;
}

