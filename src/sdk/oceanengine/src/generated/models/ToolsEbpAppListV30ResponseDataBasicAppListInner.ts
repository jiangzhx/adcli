// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ToolsEbpAppListV30DataBasicAppListAccountType, ToolsEbpAppListV30DataBasicAppListHistoryAccountType } from "../models";

export interface ToolsEbpAppListV30ResponseDataBasicAppListInner {
  account_id: string;
  account_name?: string;
  account_type: ToolsEbpAppListV30DataBasicAppListAccountType;
  app_cloud_id?: string;
  app_logo: string;
  app_name: string;
  app_name_en: string;
  authority_level?: number;
  basic_package_id: string;
  basic_package_int_id: number;
  create_time?: string;
  download_url?: string;
  firstscheduled_publish_time: string;
  has_extend_package?: boolean;
  has_package: number;
  history_account_id?: number;
  history_account_name?: string;
  history_account_type?: ToolsEbpAppListV30DataBasicAppListHistoryAccountType;
  is_ebp_asset?: boolean;
  is_punish_recover?: boolean;
  package_name: string;
  publish_time: string;
  reason?: string;
  scheduled_publish_time: string;
  success_reason?: string;
  version_code: string;
  version_name: string;
}

