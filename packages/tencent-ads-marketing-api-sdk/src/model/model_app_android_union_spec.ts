// Generated from tencentad/marketing-api-go-sdk pkg/model/model_app_android_union_spec.go
// Do not edit manually.

import type { ChannelPackageSpecStruct } from "../model/index";

export interface AppAndroidUnionSpec {
  packname?: string;
  version?: string;
  icon?: string;
  package_size?: string;
  package_md5?: string;
  package_download_url?: string;
  channel_package_spec?: ChannelPackageSpecStruct[];
}

