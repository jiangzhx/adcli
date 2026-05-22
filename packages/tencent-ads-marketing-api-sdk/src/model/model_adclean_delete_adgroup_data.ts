// Generated from tencentad/marketing-api-go-sdk pkg/model/model_adclean_delete_adgroup_data.go
// Do not edit manually.

import type { AdCleanMode, DeleteAdgroupItemClean } from "../model/index";

export interface AdcleanDeleteAdgroupData {
  is_select_all?: string;
  clean_data?: DeleteAdgroupItemClean[];
  query_info?: string;
  clean_mode?: AdCleanMode;
}

