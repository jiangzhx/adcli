// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { PunishEnumApiConfigItem, PunishEnumApiConfigLevelOne } from "../models";

export interface PunishmentConfigGetResponseData {
  illegal_scene_list?: PunishEnumApiConfigLevelOne[];
  illegal_node_list?: PunishEnumApiConfigLevelOne[];
  channel_list?: PunishEnumApiConfigLevelOne[];
  action_type?: PunishEnumApiConfigItem[];
  punish_level?: PunishEnumApiConfigItem[];
  scene_list?: PunishEnumApiConfigItem[];
}

