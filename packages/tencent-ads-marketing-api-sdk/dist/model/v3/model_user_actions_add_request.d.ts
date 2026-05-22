import type { UserAction } from "../v3/index";
export interface UserActionsAddRequest {
    account_id?: number | string;
    user_action_set_id?: number | string;
    actions?: UserAction[];
}
