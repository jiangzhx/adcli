import type { PunishEnumApiConfigLevelTwo } from "../v3/index";
export interface PunishEnumApiConfigLevelOne {
    value?: string;
    desc?: string;
    level?: number;
    parent_id?: string;
    options?: PunishEnumApiConfigLevelTwo[];
}
