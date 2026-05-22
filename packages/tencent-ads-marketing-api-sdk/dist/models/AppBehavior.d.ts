import type { AppActionObjectType } from "../models";
export interface AppBehavior {
    object_type?: AppActionObjectType;
    object_id_list?: number[];
    time_window?: number;
    act_id_list?: string[];
}
