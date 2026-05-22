import type { AdCleanMode, UpdateAdgroupConfiguredStatusItemClean } from "../model/index";
export interface AdcleanUpdateConfiguredStatusData {
    is_select_all?: string;
    clean_data?: UpdateAdgroupConfiguredStatusItemClean[];
    query_info?: string;
    clean_mode?: AdCleanMode;
}
