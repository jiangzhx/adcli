// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { ChannelTaskError, ChannelTaskStatus } from "../models";

export interface ChannelPackageInfo {
  android_app_id?: number | string;
  package_name?: string;
  status?: ChannelTaskStatus;
  error_code?: ChannelTaskError;
  created_time?: number;
  last_modified_time?: number;
  channel_package_id?: string;
}

