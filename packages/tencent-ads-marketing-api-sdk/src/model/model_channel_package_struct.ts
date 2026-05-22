// Generated from tencentad/marketing-api-go-sdk pkg/model/model_channel_package_struct.go
// Do not edit manually.

import type { UnionPackageSysStatus } from "../model/index";

export interface ChannelPackageStruct {
  app_android_channel_package_id?: string;
  package_name?: string;
  system_status?: UnionPackageSysStatus;
  package_origin_url?: string;
  created_time?: number;
  last_modified_time?: number;
}

