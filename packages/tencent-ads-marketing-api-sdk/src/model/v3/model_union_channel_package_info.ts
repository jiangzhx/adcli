// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_union_channel_package_info.go
// Do not edit manually.

import type { UnionChannelTaskStatus } from "../v3/index";

export interface UnionChannelPackageInfo {
  android_union_app_id?: number | string;
  package_name?: string;
  status?: UnionChannelTaskStatus;
  created_time?: number;
  last_modified_time?: number;
}

