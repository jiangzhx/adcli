// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_split_channel_package_data.go
// Do not edit manually.

import type { UnionPackageSysStatus } from "../v3/index";

export interface SplitChannelPackageData {
  package_id?: number | string;
  channel_name?: string;
  channel_package_id?: string;
  channel_id?: string;
  system_status?: UnionPackageSysStatus;
  created_time?: number;
  last_modified_time?: number;
  customized_channel_id?: string;
}

