import type { DataSourceType, DnFileAccessWayType, Permission } from "../model/index";
export interface UserActionSet {
    user_action_set_id?: number | string;
    type?: DataSourceType;
    mobile_app_id?: number | string;
    name?: string;
    description?: string;
    activate_status?: boolean;
    created_time?: string;
    access_way?: DnFileAccessWayType;
    usages?: string[];
    enable_conversion_claim?: boolean;
    permission?: Permission;
}
