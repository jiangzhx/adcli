import type { FileDispatchSwitch, SingleUpdateScenes } from "../model/index";
export interface SingleDataSourceScenes {
    user_action_set_id?: number | string;
    scenes?: SingleUpdateScenes[];
    switch_type?: FileDispatchSwitch;
}
