// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsEbpAppGameBookListV30DataBasicAppListAccountType } from "../models";

export interface ToolsEbpAppGameBookListV30ResponseDataBasicAppListInner {
  account_id: string;
  account_name?: string;
  account_type: ToolsEbpAppGameBookListV30DataBasicAppListAccountType;
  app_cloud_id?: string;
  app_logo: string;
  app_name: string;
  app_name_en: string;
  auth_detail?: boolean;
  basic_package_int_id: number;
  create_time?: string;
  download_url?: string;
  has_extend_package?: boolean;
  history_account_id?: number;
  history_account_name?: string;
  history_account_type?: number;
  package_id: string;
  package_name: string;
  publish_time: string;
  scheduled_publish_time: string;
  version_code: string;
  version_name: string;
}

