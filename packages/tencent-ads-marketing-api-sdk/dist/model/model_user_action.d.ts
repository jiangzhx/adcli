import type { ActionChannelType, ActionType, ActionsUserId, DeviceInfo, ProductInform, Trace } from "../model/index";
export interface UserAction {
    action_time?: number;
    user_id?: ActionsUserId;
    action_type?: ActionType;
    action_param?: Record<string, unknown>;
    custom_action?: string;
    trace?: Trace;
    url?: string;
    product_inform?: ProductInform;
    channel?: ActionChannelType;
    ext_info?: DeviceInfo;
    external_action_id?: string;
}
