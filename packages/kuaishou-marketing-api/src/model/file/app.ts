// Generated from github.com/bububa/kwai-marketing-api/model/file/app.go
// Do not edit manually.

import type { KuaishouId } from "../types";

export interface App {
  app_id?: KuaishouId;
  url?: string;
  app_version?: string;
  app_name?: string;
  app_icon_url?: string;
  image_token?: string;
  package_name?: string;
  platform?: number;
  update_time?: number;
  use_sdk?: number;
  app_privacy_url?: string;
  scan_status?: number;
  permission_information?: number[];
  real_app_version?: string;
  package_size?: number;
  app_detail_image_token?: string;
}
