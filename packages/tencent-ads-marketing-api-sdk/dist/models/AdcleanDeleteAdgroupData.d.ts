import type { AdCleanMode, DeleteAdgroupItemClean } from "../models";
export interface AdcleanDeleteAdgroupData {
    is_select_all?: string;
    clean_data?: DeleteAdgroupItemClean[];
    query_info?: string;
    clean_mode?: AdCleanMode;
}
