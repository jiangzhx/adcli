import type { UnbreakableTargetingSetting } from "../model/index";
export interface SmartTargeting {
    smart_targeting_version?: number;
    smart_targeting_switch?: boolean;
    start_audience?: number[];
    unbreakable_targeting?: UnbreakableTargetingSetting;
}
