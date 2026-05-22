// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_update_adgroup_targeting_task_item.go
// Do not edit manually.

import type { GeoLocations } from "../v3/index";

export interface UpdateAdgroupTargetingTaskItem {
  account_id?: number | string;
  adgroup_id?: number | string;
  need_upgrade_targeting?: string[];
  geo_location?: GeoLocations;
  custom_audience?: number[];
  excluded_custom_audience?: number[];
}

