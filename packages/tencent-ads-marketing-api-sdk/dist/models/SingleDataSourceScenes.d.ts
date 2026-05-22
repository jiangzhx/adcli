import type { DataSourceDispatchSwitch, SingleUpdateScenes } from "../models";
export interface SingleDataSourceScenes {
    user_action_set_id?: number | string;
    scenes?: SingleUpdateScenes[];
    switch_type?: DataSourceDispatchSwitch;
}
