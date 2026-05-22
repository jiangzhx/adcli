import type { AdCleanMode, DeleteAdgroupItemClean } from "../model/index";
export interface AdcleanDeleteAdgroupData {
    is_select_all?: string;
    clean_data?: DeleteAdgroupItemClean[];
    query_info?: string;
    clean_mode?: AdCleanMode;
}
