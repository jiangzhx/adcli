import type { AdStatus } from "../models";
export interface UpdateAdgroupConfiguredStatusItemClean {
    adgroup_id?: number | string;
    configured_status?: AdStatus;
    account_id?: number | string;
}
