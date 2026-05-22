// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { UnionPackageSysStatus } from "../models";

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

