import type { PunishEnumApiConfigItem, PunishEnumApiConfigLevelOne } from "../v3/index";
export interface PunishmentConfigGetResponseData {
    illegal_scene_list?: PunishEnumApiConfigLevelOne[];
    illegal_node_list?: PunishEnumApiConfigLevelOne[];
    channel_list?: PunishEnumApiConfigLevelOne[];
    action_type?: PunishEnumApiConfigItem[];
    punish_level?: PunishEnumApiConfigItem[];
    scene_list?: PunishEnumApiConfigItem[];
}
