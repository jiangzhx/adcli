// Generated from oceanengine/ad_open_sdk_go models/model_tools_app_management_booking_get_v2_response_data_list_inner.go
// Do not edit manually.

import type { ToolsAppManagementBookingGetV2DataListAccountType, ToolsAppManagementBookingGetV2DataListHistoryAccountType } from "../models/index";

export interface ToolsAppManagementBookingGetV2ResponseDataListInner {
  account_id?: number | string;
  account_type?: ToolsAppManagementBookingGetV2DataListAccountType;
  app_cloud_id?: number | string;
  app_name?: string;
  create_time?: string;
  download_url?: string;
  history_account_id?: number | string;
  history_account_type?: ToolsAppManagementBookingGetV2DataListHistoryAccountType;
  icon_url?: string;
  is_ebp_asset?: boolean;
  package_id?: string;
  package_name?: string;
  publish_time?: string;
  scheduled_publish_time?: string;
  update_time?: string;
  version?: string;
}

