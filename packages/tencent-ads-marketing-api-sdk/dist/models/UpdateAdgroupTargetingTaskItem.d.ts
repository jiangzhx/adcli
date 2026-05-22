import type { GeoLocations } from "../models";
export interface UpdateAdgroupTargetingTaskItem {
    account_id?: number | string;
    adgroup_id?: number | string;
    need_upgrade_targeting?: string[];
    geo_location?: GeoLocations;
    custom_audience?: number[];
    excluded_custom_audience?: number[];
}
