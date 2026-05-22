// Generated from oceanengine/ad_open_sdk_go models/model_tools_ebp_app_game_book_list_v3_0_response_data_basic_app_list_inner.go
// Do not edit manually.

import type { ToolsEbpAppGameBookListV30DataBasicAppListAccountType } from "../models/index";

export interface ToolsEbpAppGameBookListV30ResponseDataBasicAppListInner {
  account_id: string;
  account_name?: string;
  account_type: ToolsEbpAppGameBookListV30DataBasicAppListAccountType;
  app_cloud_id?: string;
  app_logo: string;
  app_name: string;
  app_name_en: string;
  auth_detail?: boolean;
  basic_package_int_id: number | string;
  create_time?: string;
  download_url?: string;
  has_extend_package?: boolean;
  history_account_id?: number | string;
  history_account_name?: string;
  history_account_type?: number;
  package_id: string;
  package_name: string;
  publish_time: string;
  scheduled_publish_time: string;
  version_code: string;
  version_name: string;
}

