import type { AdStatus } from "../model/index";
export interface UpdateAdgroupConfiguredStatusItem {
    adgroup_id?: number | string;
    configured_status?: AdStatus;
}
