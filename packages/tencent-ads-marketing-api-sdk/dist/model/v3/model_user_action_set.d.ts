import type { ActionSetAccessWayType, AmUserActionSetType, Permission } from "../v3/index";
export interface UserActionSet {
    user_action_set_id?: number | string;
    type?: AmUserActionSetType;
    mobile_app_id?: number | string;
    app_id_str?: string;
    name?: string;
    description?: string;
    activate_status?: boolean;
    created_time?: string;
    access_way?: ActionSetAccessWayType;
    usages?: string[];
    enable_conversion_claim?: boolean;
    permission?: Permission;
}
