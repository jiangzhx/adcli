// Generated from tencentad/marketing-api-go-sdk pkg/model/model_adclean_update_configured_status_data.go
// Do not edit manually.

import type { AdCleanMode, UpdateAdgroupConfiguredStatusItemClean } from "../model/index";

export interface AdcleanUpdateConfiguredStatusData {
  is_select_all?: string;
  clean_data?: UpdateAdgroupConfiguredStatusItemClean[];
  query_info?: string;
  clean_mode?: AdCleanMode;
}

