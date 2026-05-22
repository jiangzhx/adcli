import type { ActionChannelType, ActionType, ProductInform, Trace, UserIdDn } from "../v3/index";
export interface UserAction {
    action_time?: number;
    user_id?: UserIdDn;
    action_type?: ActionType;
    outer_action_id?: string;
    action_param?: Record<string, unknown>;
    custom_action?: string;
    trace?: Trace;
    url?: string;
    product_inform?: ProductInform;
    channel?: ActionChannelType;
}
