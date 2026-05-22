import type { AdStatus } from "../model/index";
export interface UpdateAdgroupConfiguredStatusItemClean {
    adgroup_id?: number | string;
    configured_status?: AdStatus;
    account_id?: number | string;
}
