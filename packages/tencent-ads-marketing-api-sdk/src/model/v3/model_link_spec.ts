// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_link_spec.go
// Do not edit manually.

import type { DeepLinkAppAndroidSpec, DeepLinkAppIosSpec } from "../v3/index";

export interface LinkSpec {
  title?: string;
  url?: string;
  deep_link_android_spec?: DeepLinkAppAndroidSpec;
  deep_link_ios_spec?: DeepLinkAppIosSpec;
}

