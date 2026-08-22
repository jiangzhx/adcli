// Generated from github.com/bububa/kwai-marketing-api/model/appcenter/subpkg/sub_package.go
// Do not edit manually.

import type { KuaishouId } from "../../types";

export interface SubPackage {
  account_id?: number;
  app_detail_img?: string;
  app_icon_url?: string;
  app_id?: KuaishouId;
  app_privacy_url?: string;
  channel_id?: string;
  ios_app_id?: string;
  offline_app_stores?: string;
  package_id?: KuaishouId;
  package_name?: string;
  package_size?: number;
  parent_package_id?: KuaishouId;
  permission_information?: number[];
  platform?: string;
  real_app_name?: string;
  real_app_version?: string;
  source_type?: number;
  sub_package_status?: number;
  update_time?: number;
  delete_time?: number;
  url?: string;
  use_sdk?: number;
  version_code?: number;
  build_status?: number;
  description?: string;
  can_update?: boolean;
  can_recycle?: boolean;
}
